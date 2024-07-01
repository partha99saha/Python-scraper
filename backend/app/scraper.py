import requests
from bs4 import BeautifulSoup
from app.logger import logger


class ContentNotFound(Exception):
    pass


def scrape_topics():
    url = "https://www.geeksforgeeks.org/topics"  # Replace with your actual URL or adjust as needed
    logger.info(f"Fetching topics from {url}")

    response = requests.get(url)

    if response.status_code != 200:
        logger.error(f"Failed to fetch topics. Status code: {response.status_code}")
        raise ContentNotFound("Content not found")

    soup = BeautifulSoup(response.content, "html.parser")
    topics = []

    # Modify this part based on the actual structure of the webpage
    for topic in soup.find_all("a", class_="topics"):
        topics.append(topic.text.strip())

    if not topics:
        logger.warning("No topics found on the webpage")
        raise ContentNotFound("No topics found")

    logger.info("Scraping topics successful")
    return topics
