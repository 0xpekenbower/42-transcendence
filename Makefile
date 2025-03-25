# Makefile Written By: Abdellah Elmrabet (aelmrabet)
# Date: Mar 10 2025

DCMD = docker compose -f ./docker-compose.yml
NETWORK_NAME = transcendence
DATA_DIR = ./data
DATABASE_DATA_PATH = ./data/postgresdb

# Build and start all services
all: 
	chmod +x ./gpg_tools.sh
	./gpg_tools.sh decrypt
	@rm -rf ./.env.gpg
	@mkdir -p $(DATA_DIR)
	@mkdir -p $(DATABASE_DATA_PATH)
	$(DCMD) build
	$(DCMD) up -d

# Start all services
up:
	$(DCMD) up -d

# Stop all services
down:
	$(DCMD) down

# Clean all services (stop and remove containers, images, and networks)
clean:
	$(DCMD) down
	@docker network rm $(NETWORK_NAME) 2>/dev/null || true

logs:
	$(DCMD) logs -f

# Force clean all services (clean + remove all data)
fclean: clean
	./gpg_tools.sh encrypt || true
	@rm -rf ./.env || true
	@docker rmi frontend:aelmrabe backend:aelmrabe postgres:aelmrabe 2>/dev/null || true
	@docker volume rm postgres_data redis_data 2>/dev/null || true
	@rm -rf ./frontend/app/node_modules ./frontend/app/.next ./frontend/app/package-lock.json 2>/dev/null || true
	@rm -rf ./backend/app/env ./backend/app/__pycache__ ./backend/app/migrations 2>/dev/null || true
	@chown -R $(USER):$(USER) $(DATABASE_DATA_PATH) 2>/dev/null || true
	@rm -rf $(DATABASE_DATA_PATH) 2>/dev/null || true
	@find $(DATA_DIR) -mindepth 1 -maxdepth 1 -not -name "postgresdb" -exec rm -rf {} \; 2>/dev/null || true
	@rm -rf $(DATA_DIR)/postgresdb 2>/dev/null || true
	@rm -rf $(DATA_DIR)/redis 2>/dev/null || true

# Phony targets
.PHONY: all up down clean fclean