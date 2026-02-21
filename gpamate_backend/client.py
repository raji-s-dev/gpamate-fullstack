import requests, json, os

url = "http://127.0.0.1:8000/ocr"
image_path = "sample.jpg"
output_filename = "ocr_output.json"

with open(image_path, "rb") as img:
    files = {"file": img}
    response = requests.post(url, files=files)

if response.status_code == 200:
    print("✅ OCR request successful!\n")
    data = response.json()
    print(json.dumps(data, indent=4, ensure_ascii=False))

    with open(output_filename, "w", encoding="utf-8") as f:
        json.dump(data, f, indent=4, ensure_ascii=False)
else:
    print("❌ Error:", response.status_code, response.text)
