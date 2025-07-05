from . import Response

class TestClient:
    def __init__(self, app):
        self.app = app

    def get(self, path):
        handler = self.app.routes.get(path, {}).get("GET")
        if handler is None:
            return Response({"detail": "Not Found"}, status_code=404)
        data = handler()
        return Response(data, status_code=200)
