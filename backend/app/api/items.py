from fastapi import APIRouter

router = APIRouter()


@router.get("/")
@router.get("", include_in_schema=False)
def list_items():
    """Return sample items without forcing a trailing slash."""
    return [{"id": 1, "name": "Sample"}]

