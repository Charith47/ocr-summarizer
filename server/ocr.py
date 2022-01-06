import cv2 as cv
import pytesseract as pt

pt.pytesseract.tesseract_cmd = "C:\\Program Files\\Tesseract-OCR\\tesseract.exe"


def test_ocr_engine():
    try:
        img = cv.imread("../assets/test-basic.png")
        img = cv.cvtColor(img, cv.COLOR_BGR2RGB)
        text = pt.image_to_string(img)
        return "Working", None, text
    except Exception as e:
        return "NOT working", str(e), None
