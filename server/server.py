# API for text recognition and summarization
from quart import Quart, request, jsonify

from ocr_serial import s_test_ocr_engine, s_multi_ocr

app = Quart(__name__)
app.config["DEBUG"] = True

# ROUTES FOR TESTING
@app.route("/api/", methods=["GET"])
def home():
    # test API status
    return jsonify({"message": "Hello from API!"}), 200


@app.route("/api/test/ocr", methods=["GET"])
async def ocr():
    # test OCR function
    engine_status, error_message, text = await s_test_ocr_engine()
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


# ROUTES FOR THE CLIENT
@app.route("/api/ocr/s/multi", methods=["POST"])
async def ocr_m():
    dict_str = await request.get_json()
    result = await s_multi_ocr(dict_str)
    return jsonify(result), 200

# @app.route("/api/ocr/p")

app.run(port=3001)
