from fastapi import FastAPI, File, UploadFile
from fastapi.responses import JSONResponse
from fastapi.middleware.cors import CORSMiddleware
from paddleocr import PaddleOCR
import tempfile
import re
from typing import List
from PIL import Image
from pdf2image import convert_from_path
import os

POPPLER_PATH = r"C:\Users\RAJI\Downloads\Release-25.12.0-0\poppler-25.12.0\Library\bin"

ALLOWED_EXTENSIONS = {".jpg", ".jpeg", ".png", ".pdf"}



# -----------------------------
# OCR INIT (GPU – LOAD ONCE)
# -----------------------------
ocr = PaddleOCR(
    use_gpu=True,
    use_textline_orientation=True,
    lang="en",
    rec_batch_num=6
)

# -----------------------------
# APP
# -----------------------------
app = FastAPI(
    title="GPU Batch OCR GPA API",
    description="GPU-powered OCR with GPA & CGPA extraction"
)

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# -----------------------------
# OCR UTILS (GPU)
# -----------------------------
def extract_text(image_path: str) -> list[str]:
    result = ocr.ocr(image_path, cls=False)
    texts = []

    if result and result[0]:
        for line in result[0]:
            texts.append(line[1][0])

    return texts


# -----------------------------
# STUDENT INFO
# -----------------------------
def extract_student_info(texts: list[str]) -> dict:
    info = {"name": None, "regNo": None, "program": None}

    for t in texts:
        line = t.lower().replace(".", "").strip()

        if not info["name"] and "student name" in line:
            info["name"] = t.split(":", 1)[-1].strip()

        elif not info["regNo"] and "reg" in line and "no" in line:
            info["regNo"] = t.split(":", 1)[-1].strip()

        elif not info["program"] and "program" in line:
            info["program"] = t.split(":", 1)[-1].strip()

        if all(info.values()):
            break

    return info


# -----------------------------
# SEMESTER
# -----------------------------
def detect_semester(texts: list[str]) -> int | None:
    matches = []
    for t in texts:
        m = re.search(r"(semester|sem)[\s\-]*(\d+)", t.lower())
        if m:
            matches.append(int(m.group(2)))

    return max(set(matches), key=matches.count) if matches else None


# -----------------------------
# GPA
# -----------------------------
def calculate_gpa(texts: list[str]) -> float | None:
    grade_points = []
    credits = []

    for i, t in enumerate(texts):
        if t.isdigit() and 6 <= int(t) <= 10:
            for j in range(i + 1, min(i + 5, len(texts))):
                if texts[j].isdigit() and 1 <= int(texts[j]) <= 5:
                    grade_points.append(int(t))
                    credits.append(int(texts[j]))
                    break

    if not credits:
        return None

    total = sum(g * c for g, c in zip(grade_points, credits))
    return round(total / sum(credits), 2)


# -----------------------------
# PROCESS ONE FILE
# -----------------------------
def process_file(file: UploadFile) -> dict | None:
    suffix = os.path.splitext(file.filename)[1].lower()
    if suffix not in ALLOWED_EXTENSIONS:
        return None

    with tempfile.NamedTemporaryFile(delete=False, suffix=suffix) as tmp:
        tmp.write(file.file.read())
        path = tmp.name

    file.file.close()  # 🔐 release FastAPI file handle

    img_path = path

    try:
        if suffix == ".pdf":
            page = convert_from_path(
                path,
                dpi=300,
                first_page=1,
                last_page=1,
                poppler_path=POPPLER_PATH
            )[0]
            img_path = path.replace(".pdf", ".png")
            page.save(img_path, "PNG", optimize=False)

        # 🔐 PIL file closed properly
        with Image.open(img_path) as img:
            if img.mode != "RGB":
                img = img.convert("RGB")
                img.save(img_path)

        texts = extract_text(img_path)

        student = extract_student_info(texts)
        semester = detect_semester(texts)
        gpa = calculate_gpa(texts)

        if semester is None or gpa is None:
            return None

        return {
            "semester": semester,
            "gpa": gpa,
            "student": student
        }

    finally:
        if os.path.exists(path):
            os.remove(path)
        if img_path != path and os.path.exists(img_path):
            os.remove(img_path)



# -----------------------------
# CGPA
# -----------------------------
def calculate_cgpa(semesters: list[dict]) -> float:
    total = sum(s["gpa"] for s in semesters)
    return round(total / len(semesters), 2)


# -----------------------------
# API ENDPOINT (BATCH)
# -----------------------------
@app.post("/ocr/batch")
async def batch_ocr(files: List[UploadFile] = File(...)):
    if len(files) > 8:
        return JSONResponse(
            content={"status": "error", "message": "Max 8 files allowed"},
            status_code=400
        )

    semester_map = {}
    student_info = None

    for file in files:
        result = process_file(file)
        if result:
            semester_map[result["semester"]] = result

        if not student_info and result and result.get("student"):
            student_info = result["student"]

    if not semester_map:
        return JSONResponse(
            content={"status": "error", "message": "No valid GPA data found"},
            status_code=400
        )

    semesters = sorted(semester_map.values(), key=lambda x: x["semester"])
    cgpa = calculate_cgpa(semesters)

    return {
        "status": "success",
        "student": student_info,
        "semesters": semesters,
        "cgpa": cgpa
    }
