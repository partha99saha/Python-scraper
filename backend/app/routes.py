from fastapi import APIRouter, HTTPException
from typing import List
from app.scraper import scrape_topics

router = APIRouter()


@router.get("/topics", response_model=List[str])
def get_topics():
    try:
        topics = scrape_topics()
        return topics
    except Exception as e:
        print(e)
        raise HTTPException(status_code=500, detail=str(e))


@router.get("/search")
def search_topic(query: str):
    try:
        topics = scrape_topics()
        filtered_topics = [topic for topic in topics if query.lower() in topic.lower()]
        return filtered_topics
    except Exception as e:
        print(e)
        raise HTTPException(status_code=500, detail=str(e))
