# API for text recognition and summarization

import flask
from flask import request, jsonify

app = flask.Flask(__name__)
app.config["DEBUG"] = True


@app.route("/", methods=["GET"])
def home():
    return jsonify({"message": "Hello from OCR API!"})


app.run()
