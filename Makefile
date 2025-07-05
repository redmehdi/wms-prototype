up:
	docker-compose up -d --build

down:
        docker-compose down

load:
        docker-compose run --rm backend python -m app.scripts.load_data
