import requests
from bs4 import BeautifulSoup


def scrape_topics():
    url = "https://www.geeksforgeeks.org/topics"
    response = requests.get(url)

    if response.status_code != 200:
        raise Exception("Failed to fetch topics")

    soup = BeautifulSoup(response.content, "html.parser")
    topics = []

    # Assuming <a> tags with class 'topics' contain the topic names
    for topic in soup.find_all("a", class_="topics"):
        topics.append(topic.text.strip())

    return topics
