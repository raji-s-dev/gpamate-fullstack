import { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";

import upload from "../../../assets/Hero/upload.png";
import { sendImagesToOCR } from "../../../api/ocr";

/* =========================
   Types & Constants
========================= */
type UploadedFile = {
  file: File;
  preview: string;
};

const MAX_FILES = 8;

/* =========================
   Component
========================= */
const FileUpload: React.FC = () => {
  /* ---------- Hooks ---------- */
  const navigate = useNavigate();
  const fileInputRef = useRef<HTMLInputElement>(null);

  const [files, setFiles] = useState<UploadedFile[]>([]);
  const [activePreview, setActivePreview] = useState<UploadedFile | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);


  /* ---------- Effects ---------- */
  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setActivePreview(null);
      }
    };

    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, []);

  /* ---------- Handlers ---------- */
  const handleClick = () => {
    fileInputRef.current?.click();
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const selectedFiles = e.target.files;
    if (!selectedFiles) return;

    setError(null);

    const newFiles: UploadedFile[] = Array.from(selectedFiles).map((file) => ({
      file,
      preview: URL.createObjectURL(file),
    }));

    setFiles((prev) => {
      const combined = [...prev, ...newFiles];

      if (combined.length > MAX_FILES) {
        alert(`You can only upload up to ${MAX_FILES} files.`);
        return combined.slice(0, MAX_FILES);
      }

      return combined;
    });

    e.target.value = "";
  };

  const handleDelete = (index: number) => {
    setFiles((prev) => prev.filter((_, i) => i !== index));
  };

const handleCalculate = async () => {
  if (files.length === 0) {
    setError("No files uploaded yet. Please upload your result files to continue.");
    return;
  }

  setError(null);
  setIsLoading(true);

  try {
    const result = await sendImagesToOCR(files.map(f => f.file));

    // Backend returned an error (like no valid GPA data)
    if (result.status === "error") {
      setError(result.message || "No valid GPA data found.");
      return;
    }

    // Success → navigate to result page
    navigate("/result", {
      state: {
        student: result.student,
        semesters: result.semesters,
        cgpa: result.cgpa
      }
    });

  } catch (err) {
    console.error(err);
    // Any network/connection error
    setError("Something went wrong while processing your files. Please try again.");
  } finally {
    setIsLoading(false);
  }
};



  /* =========================
     Render
  ========================= */
  return (
    <div className="max-w-4xl mx-auto px-4 py-16 text-center">
      {/* ================= HIDDEN FILE INPUT ================= */}
      <input
        placeholder="fileupload"
        ref={fileInputRef}
        type="file"
        accept=".jpg,.jpeg,.png,.pdf"
        multiple
        onChange={handleFileChange}
        className="hidden"
      />

      {/* ================= UPLOAD BOX ================= */}
      <div
        onClick={!isLoading ? handleClick : undefined}
        className={`border border-black rounded-lg p-12 max-md:mx-4 flex flex-col items-center gap-6 transition ${
          isLoading
            ? "opacity-50 cursor-not-allowed"
            : "cursor-pointer hover:bg-gray-50"
        }`}
      >
        <img src={upload} className="h-8" alt="upload" />

        <div>
          <p className="text-sm font-helvetica">
            Select a file or drag and drop here
          </p>
          <p className="text-xs text-black/40 mt-1">
            JPG, PNG or PDF, file size no more than 10MB
          </p>
        </div>

        <button
          type="button"
          className="px-4 py-2 text-xs uppercase text-sky-600 border border-sky-600 rounded pointer-events-none"
        >
          Select file
        </button>
      </div>

      {/* ================= FILE PREVIEW GRID ================= */}
      {files.length > 0 && (
        <div className="mt-12 grid grid-cols-2 sm:grid-cols-4 gap-6">
          {files.map((item, index) => (
            <div
              key={index}
              onClick={() => !isLoading && setActivePreview(item)}
              className="border border-black rounded-lg p-3 flex flex-col items-center relative cursor-pointer hover:scale-[1.02] transition"
            >
              {item.file.type.startsWith("image") ? (
                <img
                  src={item.preview}
                  alt={item.file.name}
                  className="h-40 object-contain"
                />
              ) : (
                <div className="h-40 w-full flex items-center justify-center bg-gray-100 text-sm">
                  PDF
                </div>
              )}

              <p className="mt-2 text-xs truncate w-full text-center">
                {item.file.name}
              </p>

              {/* DELETE BUTTON */}
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  handleDelete(index);
                }}
                className="absolute top-1 right-1 text-red-500 bg-white rounded-full p-1 hover:bg-red-100"
              >
                ✕
              </button>
            </div>
          ))}
        </div>
      )}

      {/* ================= CTA BUTTON ================= */}
<button
  onClick={handleCalculate}
  className="mt-16 w-64 h-16 rounded-full text-white text-xl font-poppins bg-blue-500 hover:brightness-110 transition"
>
  {isLoading ? "Processing..." : "Calculate Now"}
</button>
{error && (
  <p className="mt-4 text-sm text-red-500 font-medium">
    {error}
  </p>
)}

      <p
  onClick={() => {
    const NAVBAR_HEIGHT = 96;
    const el = document.getElementById("how");
    if (!el) return;

    const y =
      el.getBoundingClientRect().top +
      window.pageYOffset -
      NAVBAR_HEIGHT;

    window.scrollTo({ top: y, behavior: "smooth" });
  }}
  className="mt-4 text-xs text-black cursor-pointer hover:text-blue-500 transition"
>
  ↓ See How It Works
</p>


      {/* ================= FULLSCREEN PREVIEW ================= */}
      {activePreview && (
        <div
          className="fixed inset-0 z-50 bg-black/80 flex items-center justify-center"
          onClick={() => setActivePreview(null)}
        >
          <div
            className="relative max-w-5xl w-full h-full flex items-center justify-center p-6"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setActivePreview(null)}
              className="absolute top-6 right-6 text-white text-3xl hover:opacity-70"
            >
              ✕
            </button>

            {activePreview.file.type.startsWith("image") ? (
              <img
                src={activePreview.preview}
                alt={activePreview.file.name}
                className="max-h-full max-w-full object-contain"
              />
            ) : (
              <iframe
                src={activePreview.preview}
                className="w-full h-full bg-white rounded"
                title={activePreview.file.name}
              />
            )}
          </div>
        </div>
      )}

      {/* ================= LOADING OVERLAY ================= */}
      {isLoading && (
        <div className="fixed inset-0 z-50 bg-black/70 flex flex-col items-center justify-center">
          <div className="h-16 w-16 border-4 border-white/30 border-t-white rounded-full animate-spin" />

          <p className="mt-6 text-white text-lg font-medium">
            Processing your document…
          </p>
          <p className="mt-1 text-white/70 text-sm">
            This may take a few seconds
          </p>
        </div>
      )}
    </div>
  );
};

export default FileUpload;
