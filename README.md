# 🎓 GPAmate

> AI-Powered CGPA & GPA Calculator for Anna University Students  
> Upload → Extract → Calculate → Analyze — in Seconds.

GPAmate helps Anna University students calculate their semester GPA and overall CGPA instantly using AI-powered OCR. No manual grade entry. Just upload your result PDF or image and get a complete academic performance report within seconds.

💙 Made by Students, for Students.

---

## 🚀 Live Demo

🌐 https://gpamate.vercel.app/

---

## ✨ Features

### 📤 Upload & Go
- Upload result PDFs or images (JPG, PNG)
- Drag & drop support
- Multiple semester uploads (up to 8 files)

### 🤖 AI-Powered Grade Extraction
- GPU-accelerated OCR using **PaddleOCR**
- Extracts:
  - Student Name
  - Register Number
  - Program
  - Semester
  - Subject grades & credits

### 📊 Automatic GPA Calculation
- Calculates semester-wise GPA
- Computes overall CGPA
- Detects latest grades for revaluation & arrears
- 99% extraction accuracy (clear files)

### 📈 Instant CGPA Report
- Semester-wise GPA table
- Overall CGPA
- Performance trend graph
- Downloadable & shareable report

### 🔐 Privacy-First Architecture
- Files processed in real-time
- No file storage
- Temporary file cleanup after processing

---

## 🧠 How It Works

### 1️⃣ Upload Results
Students upload semester result PDFs or images.

### 2️⃣ AI Text Recognition
GPU-powered PaddleOCR extracts:
- Subject codes
- Grade points
- Credits
- Semester number

### 3️⃣ GPA Calculation
System calculates:

- Semester GPA  
- Overall CGPA  

Using official Anna University grading standards.

### 4️⃣ Instant Report
Users receive a structured JSON response with:
- Student details
- Semester GPAs
- Final CGPA

---

## 🏗️ Tech Stack

### 🔹 Backend
- FastAPI
- PaddleOCR (GPU enabled)
- pdf2image
- PIL (Pillow)
- Python 3.10+
- CORS Middleware

### 🔹 AI / OCR
- PaddleOCR (GPU acceleration)
- Textline orientation detection
- Batch recognition

### 🔹 Frontend

- react
- typescript
- tailwind

### 🔹 Deployment
- Uvicorn
- GPU-supported server
- Poppler (for PDF processing)

---




## ⚙️ Installation & Setup

### 🔹 Prerequisites

- Python 3.10+
- CUDA-enabled GPU (recommended)
- Poppler installed (for PDF processing)

---
# GPA Mate Backend

## 🔧 Setup Instructions

### 🔹 Clone the Repository

```bash
git clone https://github.com/raji-s-dev/gpamate.git
cd gpamate
```

### 🔹 Install Dependencies

```bash
pip install -r requirements.txt
```

### 🔹 Set Poppler Path

Update in `server.py`:

```python
POPPLER_PATH = r"YOUR_POPPLER_BIN_PATH"
```

Example (Windows):

```python
POPPLER_PATH = r"C:\poppler\Library\bin"
```

### 🔹 Run Server

```bash
uvicorn server:app --reload
```

Server will start at:

```
http://127.0.0.1:8000
```

---

## 📡 API Documentation

### Endpoint

```
POST /ocr/batch
```

### Request

**Multipart form-data**

- Upload up to 8 files  
- Supported formats:
  - `.jpg`
  - `.jpeg`
  - `.png`
  - `.pdf`

---

### Example Response

```json
{
  "status": "success",
  "student": {
    "name": "John Doe",
    "regNo": "1234567890",
    "program": "B.E Computer Science"
  },
  "semesters": [
    {
      "semester": 1,
      "gpa": 8.5
    },
    {
      "semester": 2,
      "gpa": 8.9
    }
  ],
  "cgpa": 8.7
}
```

---



## 🔥 Key Engineering Highlights

- GPU-accelerated OCR (high performance)
- Temporary file handling & cleanup
- Batch processing (multi-semester)
- Revaluation-aware logic
- Automatic semester detection
- Secure & stateless API design

---

## 🛡️ Security & Privacy

- Files are processed temporarily
- No database storage
- No persistent file storage
- Files auto-deleted after processing

---

## 🧪 Limitations

- Works best with clear, official Anna University formats
- Extremely low-quality scans may reduce accuracy
- Currently optimized for Anna University grading pattern

---

## 🚀 Future Improvements

- Docker deployment
- Cloud GPU hosting
- User authentication
- Historical CGPA tracking
- Report PDF generation
- Support for other universities

---

## 👨‍💻 Author

**Raji S**


## ⭐ Why This Project Stands Out

- Real-world problem solving
- AI integration in production workflow
- GPU optimization
- Clean API architecture
- Student-focused SaaS product


