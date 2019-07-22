build:
	docker-compose up -d --build api mongo web

start:
	docker-compose up api mongo web | egrep "api|web"

stop:
	docker-compose down