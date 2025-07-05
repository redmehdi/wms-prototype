from fastapi import APIRouter

router = APIRouter()


@router.get("/", summary="Get dashboard metrics")
def get_dashboard():
    """Return sample dashboard metrics."""
    return {
        "totalSKUs": 20,
        "totalItems": 150,
        "inventoryValue": 3400.0,
        "pendingOrders": 5,
        "lowStockItems": 2,
        "criticalAlerts": 1,
        "inventoryByCategory": [
            {"category": "Widgets", "count": 50},
            {"category": "Gadgets", "count": 100},
        ],
        "orderStatusData": [
            {"status": "new", "count": 3},
            {"status": "processing", "count": 1},
            {"status": "packed", "count": 1},
        ],
        "recentActivities": [
            {
                "id": "1",
                "action": "added",
                "item": "Widget A",
                "quantity": 10,
                "timestamp": "2024-01-01T12:00:00Z",
            }
        ],
        "lowStockList": [
            {
                "id": "1",
                "name": "Widget B",
                "currentStock": 2,
                "minStock": 5,
                "reorderQuantity": 10,
            }
        ],
    }
