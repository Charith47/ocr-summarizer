import os
import io
import base64
import numpy as np
from PIL import Image

import cv2 as cv
import pytesseract as pt

async def test_ocr_engine():
    try:
        img = cv.imread(os.path.join(os.path.dirname(__file__),'assets','test-paper.jpg'))
        img = cv.cvtColor(img, cv.COLOR_BGR2RGB)
        text = pt.image_to_string(img)
        return "Working", None, text
    except Exception as e:
        return "NOT working", str(e), None


async def multi_ocr(b64_images: list):
    # args: list [{name,b64_string}]
    # returns list of results [{name,text}..]
    results = []
    for b64_image in b64_images:
        image = base64.b64decode(b64_image["image"])
        image = Image.open(io.BytesIO(image))

        # convert to RGB
        image = cv.cvtColor(np.array(image), cv.COLOR_BGR2RGB)
        text = pt.image_to_string(image)

        results.append({"name": b64_image["name"], "text": " ".join(text.split())})
    return results
