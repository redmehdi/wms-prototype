class APIRouter:
    def __init__(self):
        self.routes = {}

    def get(self, path, **kwargs):
        def decorator(func):
            self.routes.setdefault(path, {})["GET"] = func
            return func
        return decorator

    def include_router(self, router, prefix="", tags=None):
        for route, methods in router.routes.items():
            full = prefix + route
            self.routes.setdefault(full, {}).update(methods)
            if full.endswith("/") and full != "/":
                self.routes.setdefault(full.rstrip("/"), {}).update(methods)

class FastAPI(APIRouter):
    def __init__(self, title=""):
        super().__init__()
        self.title = title

    def get(self, path, **kwargs):
        return super().get(path, **kwargs)

    def include_router(self, router, prefix="", tags=None):
        for route, methods in router.routes.items():
            full = prefix + route
            self.routes.setdefault(full, {}).update(methods)
            if full.endswith("/") and full != "/":
                self.routes.setdefault(full.rstrip("/"), {}).update(methods)

class Response:
    def __init__(self, data, status_code=200):
        self._data = data
        self.status_code = status_code

    def json(self):
        return self._data

class Depends:
    def __init__(self, dependency):
        self.dependency = dependency

from .testclient import TestClient
