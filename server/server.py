# API for text recognition and summarization

import flask
from flask import jsonify

from ocr import test_ocr_engine

app = flask.Flask(__name__)
app.config["DEBUG"] = True


@app.route("/api/", methods=["GET"])
def home():
    # test API status
    return jsonify({"message": "Hello from API!"}), 200


@app.route("/api/test/ocr", methods=["GET"])
def ocr():
    # test OCR function
    engine_status, error_message, text = test_ocr_engine()
    if engine_status == "Working":
        return (
            jsonify(
                {
                    "engineStatus": engine_status,
                    "text": text,
                }
            ),
            200,
        )
    else:
        return (
            jsonify(
                {
                    "engineStatus": engine_status,
                    "errorMessage": error_message,
                }
            ),
            500,
        )


app.run()
