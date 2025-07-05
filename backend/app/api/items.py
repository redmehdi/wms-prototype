from fastapi import APIRouter, Depends
from sqlmodel import Session, select
from ..core.database import get_session
from ..models.item import Item

router = APIRouter()


@router.get("/", response_model=list[Item])
def list_items(session: Session = Depends(get_session)):
    return session.exec(select(Item)).all()

