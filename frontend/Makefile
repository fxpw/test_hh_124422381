exec_in_container=docker compose exec test_hh_124422381_front


.PHONY: build start
all: build start
build:
	docker compose build
build_no_cache:
	docker compose build --no-cache
stop:
	docker compose down
down:
	docker compose down
run:
	docker compose up -d
up:
	docker compose up -d
start:
	docker compose up -d
build_start:
	docker compose build
rebuild: down build_no_cache up
	echo "rebuild"

npm_install:
	$(exec_in_container) npm install $(p)

vite_build:
	$(exec_in_container) npm run build
vite_preview:
	$(exec_in_container) npm run preview
vite_dev:
	$(exec_in_container) npm run dev
