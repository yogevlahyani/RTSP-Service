build:
	docker-compose up -d --build api mongo

start:
	docker-compose up api mongo | egrep "api|mongo"

stop:
	docker-compose down