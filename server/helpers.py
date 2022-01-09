import re


def string_cleaner(text: str):
    return " ".join(text.split())
    # return text.replace("\n", " ").replace("\r", "")
