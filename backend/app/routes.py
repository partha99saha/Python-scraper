from fastapi import APIRouter, HTTPException
from typing import List
from app.scraper import scrape_topics, ContentNotFound
from app.logger import logger

router = APIRouter()


@router.get("/topics", response_model=List[str])
def get_topics():
    try:
        topics = scrape_topics()
        return topics
    except ContentNotFound as e:
        logger.warning(f"Content not found: {str(e)}")
        raise HTTPException(status_code=404, detail="Content not found")
    except Exception as e:
        logger.error(f"Internal server error: {str(e)}")
        raise HTTPException(status_code=500, detail="Internal server error")


@router.get("/search")
def search_topic(query: str):
    try:
        topics = scrape_topics()
        filtered_topics = [topic for topic in topics if query.lower() in topic.lower()]
        return filtered_topics
    except ContentNotFound as e:
        logger.warning(f"Content not found during search: {str(e)}")
        raise HTTPException(status_code=404, detail="Content not found")
    except Exception as e:
        logger.error(f"Internal server error during search: {str(e)}")
        raise HTTPException(status_code=500, detail="Internal server error")
