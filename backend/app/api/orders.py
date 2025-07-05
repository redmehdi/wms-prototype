from fastapi import APIRouter

router = APIRouter()


@router.get("/")
@router.get("", include_in_schema=False)
def list_orders():
    """Return sample orders without forcing a trailing slash."""
    return [{"id": 1, "item_id": 1, "quantity": 1}]

