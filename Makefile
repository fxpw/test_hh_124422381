
.PHONY: create_network start_all
all: create_network start_all

NETWORK_NAME := test_hh_net_124422381

create_network:
	@docker network inspect $(NETWORK_NAME) > /dev/null 2>&1 || (echo "Создаю сеть $(NETWORK_NAME)" && docker network create $(NETWORK_NAME))

start_all:
	@echo "Запуск всех микросервисов..."

start:create_network start_all

stop_all:
	@echo "Остановка всех микросервисов..."

down:stop_all
stop:stop_all
