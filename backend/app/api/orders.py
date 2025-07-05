from fastapi import APIRouter, Depends
from sqlmodel import Session, select
from ..core.database import get_session
from ..models.order import Order

router = APIRouter()


@router.get("/", response_model=list[Order])
def list_orders(session: Session = Depends(get_session)):
    return session.exec(select(Order)).all()

