import os
import concurrent.futures
import psutil

import io
import base64
import numpy as np
from PIL import Image

import cv2 as cv
import pytesseract as pt

os.environ["OMP_THREAD_LIMIT"] = "1"

pt.pytesseract.tesseract_cmd = "C:\\Program Files\\Tesseract-OCR\\tesseract.exe"


async def test_ocr_engine():
    try:
        img = cv.imread("../assets/test-paper.jpg")
        img = cv.cvtColor(img, cv.COLOR_BGR2RGB)
        text = pt.image_to_string(img)
        return "Working", None, text
    except Exception as e:
        return "NOT working", str(e), None


async def multi_ocr(b64_images: list):
    # args: list [{name,b64_string}]
    # returns list of results [{name,text}..]

    images = convert_b64_to_image(b64_images)

    results = []
    for image in images:
        text = pt.image_to_string(image["image"])
        results.append({"name": image["name"], "text": text})
    # cv.imshow("Result", images[0]["image"])
    # cv.waitKey(0)
    return results


# give converted list ?
async def multi_ocr_parallel(b64_images: list):
    with concurrent.futures.ProcessPoolExecutor(
        max_workers=psutil.cpu_count(logical=False) - 1
    ) as executor:
        for b64_image in b64_images:
            pass


# Helper functions

# Convert to CV image
def convert_b64_to_image(b64_images: list):
    # args: list [{name,b64_string}]
    # returns list of images [{name, image}...]
    images = []
    for b64_image in b64_images:
        image = base64.b64decode(b64_image["image"])
        image = Image.open(io.BytesIO(image))

        # convert to RGB
        image = cv.cvtColor(np.array(image), cv.COLOR_BGR2RGB)

        # name
        # image data
        images.append({"name": b64_image["name"], "image": image})
    return images
