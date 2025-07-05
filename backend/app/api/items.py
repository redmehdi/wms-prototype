from fastapi import APIRouter, Depends
from sqlmodel import Session, select
from ..core.database import get_session
from ..models.item import Item

router = APIRouter()


@router.get("/", response_model=list[Item])
@router.get("", include_in_schema=False)
def list_items(session: Session = Depends(get_session)):
    """Return all items without forcing a trailing slash."""
    return session.exec(select(Item)).all()

