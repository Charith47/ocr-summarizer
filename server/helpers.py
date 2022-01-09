import os


def string_cleaner(text: str):
    return " ".join(text.split())


def read_file(filename: str):
    parent_dir = os.path.dirname(__file__)

    rel_path = f"assets\\{filename}.txt"
    abs_path = os.path.join(parent_dir, rel_path)

    with open(abs_path, "r") as file:
        text = file.read().rstrip()

    return text
