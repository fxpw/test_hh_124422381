
.PHONY: create_network start_all
all: create_network start_all

NETWORK_NAME := test_hh_net_124422381

create_network:
	@docker network inspect $(NETWORK_NAME) > /dev/null 2>&1 || (echo "Создаю сеть $(NETWORK_NAME)" && docker network create $(NETWORK_NAME))

start_all:
	@echo "Запуск всех микросервисов..."
	@docker compose -f backend/docker-compose.yml up -d
	@docker compose -f traefik/docker-compose.yml up -d
	@docker compose -f frontend/docker-compose.yml up -d


start:create_network start_all

stop_all:
	@echo "Остановка всех микросервисов..."
	@docker compose -f backend/docker-compose.yml down

down:stop_all
stop:stop_all
