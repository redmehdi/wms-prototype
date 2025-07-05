from celery import Celery
from ..core.config import settings

celery_app = Celery('wms', broker=settings.rabbitmq_url)

@celery_app.task
def nightly_forecast():
    return "forecast complete"

