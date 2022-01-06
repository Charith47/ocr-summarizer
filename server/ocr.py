import io
import base64
import numpy as np
from PIL import Image

import cv2 as cv
import pytesseract as pt

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

    # list of dicts [{name,b64}..]
    # base64 to png

    images = []

    for b64_image in b64_images:
        image = base64.b64decode(b64_image["image"])
        image = Image.open(io.BytesIO(image))

        # convert to RGB
        image = cv.cvtColor(np.array(image), cv.COLOR_BGR2RGB)

        # TODO: parallel processing
        text = pt.image_to_string(image)

        images.append(
            {
                "name": b64_image["name"],
                "text": text,
            }
        )

    # cv.imshow("Result", images[0]["image"])
    # cv.waitKey(0)
    return images
