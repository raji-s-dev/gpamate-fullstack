import requests
import json
import os

# === Configuration ===
API_URL = "http://127.0.0.1:8000/ocr"
INPUT_FOLDER = "testimages"
OUTPUT_FOLDER = "output"

# === Ensure output folder exists ===
os.makedirs(OUTPUT_FOLDER, exist_ok=True)

# === Process each image in testimages/ ===
for image_name in os.listdir(INPUT_FOLDER):
    if not image_name.lower().endswith((".jpg", ".jpeg", ".png")):
        continue  # Skip non-image files

    image_path = os.path.join(INPUT_FOLDER, image_name)
    output_filename = os.path.splitext(image_name)[0] + ".json"
    output_path = os.path.join(OUTPUT_FOLDER, output_filename)

    print(f"\n📤 Sending {image_name} to OCR API...")

    try:
        with open(image_path, "rb") as img:
            files = {"file": img}
            response = requests.post(API_URL, files=files)

        if response.status_code == 200:
            data = response.json()
            print(f"✅ Success: {image_name}")
            
            # Save OCR result
            with open(output_path, "w", encoding="utf-8") as f:
                json.dump(data, f, indent=4, ensure_ascii=False)
        else:
            print(f"❌ Error for {image_name}: {response.status_code} - {response.text}")

    except Exception as e:
        print(f"⚠️ Exception processing {image_name}: {e}")

print("\n🎯 All done! Check the 'output' folder for results.")
