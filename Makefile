.PHONY: run
run:
	docker compose up --no-attach mongo

.PHONY: stop
stop:
	docker compose down

.PHONY: rebuild
rebuild:
	docker compose up --build --no-attach mongo

.PHONY: docker-clean
docker-clean:
	docker compose down --rmi all --volumes --remove-orphans