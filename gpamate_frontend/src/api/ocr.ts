const OCR_API = import.meta.env.VITE_OCR_API;

export async function sendImagesToOCR(files: File[]) {
  const formData = new FormData();

  files.forEach((file) => {
    formData.append("files", file);
  });

  const response = await fetch(`${OCR_API}/ocr/batch`, {
    method: "POST",
    body: formData,
  });

  if (!response.ok) {
    const error = await response.json();
    throw new Error(error.message || "OCR failed");
  }

  return response.json();
}
