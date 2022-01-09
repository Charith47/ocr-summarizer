# summary
# word count
from nltk.corpus import stopwords
from nltk.cluster.util import cosine_distance

import numpy as np
import networkx as nx

from helpers import string_cleaner, read_file


def text_sanitizer(text: str):
    sentences = text.split(". ")
    clean_sentences = []

    # cleanup
    for sentence in sentences:
        # print(sentence)
        clean_sentences.append(sentence.replace("[^a-zA-Z]", " ").split(" "))

    clean_sentences.pop()

    return clean_sentences


def get_similarity(s1, s2, stopwords=None):
    if stopwords is None:
        stopwords = []

    # s = sentence
    # w = word
    s1 = [w.lower() for w in s1]
    s2 = [w.lower() for w in s2]

    all_words = list(set(s1 + s2))

    # v = vector
    # initialize two vectors
    v1 = [0] * len(all_words)
    v2 = [0] * len(all_words)

    # build the vector
    for w in s1:
        if w in stopwords:
            continue
        v1[all_words.index(w)] += 1

    for w in s2:
        if w in stopwords:
            continue
        v2[all_words.index(w)] += 1

    return 1 - cosine_distance(v1, v2)


def similarity_matrix(sentences, stop_words):
    # create empty matrix
    s_matrix = np.zeros((len(sentences), len(sentences)))

    for i in range(len(sentences)):
        for j in range(len(sentences)):
            if i == j:
                continue
            s_matrix[i][j] = get_similarity(sentences[i], sentences[j], stop_words)

    return s_matrix


async def summarize(text, top_sentence_n=5):
    stop_words = stopwords.words("english")
    summarized = []

    sentences = text_sanitizer(text)
    s_matrix = similarity_matrix(sentences, stop_words)

    s_graph = nx.from_numpy_array(s_matrix)
    scores = nx.pagerank(s_graph)

    ranked_sentence = sorted(
        ((scores[i], s) for i, s in enumerate(sentences)), reverse=True
    )

    if len(ranked_sentence) < top_sentence_n:
        for i in range(len(ranked_sentence)):
            summarized.append(" ".join(ranked_sentence[i][1]))
    else:
        for i in range(top_sentence_n):
            summarized.append(" ".join(ranked_sentence[i][1]))

    return string_cleaner(". ".join(summarized))


async def test_summary_engine():
    try:
        text = read_file("test")
        return "Working", None, await summarize(text)
    except Exception as e:
        return "NOT working", str(e), None
