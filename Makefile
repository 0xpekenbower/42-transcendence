# Makefile Written By: Abdellah Elmrabet (aelmrabet)
# Date: Mar 10 2025

DCMD = docker compose -f ./docker-compose.yml
NETWORK_NAME = transcendence
DATA_DIR = ./data


# Frontend Service Local Directories
FRONTEND_DIR = ./frontend
FRONTEND_CONTAINER_NAME = frontend
FRONTEND_IMAGE_NAME = frontend:aelmrabe
FRONTEND_VOLUME_NAME = frontend_volume

# Backend Service Local Directories
BACKEND_DIR = ./backend
BACKEND_CONTAINER_NAME = backend
BACKEND_IMAGE_NAME = backend:aelmrabe
BACKEND_VOLUME_NAME = backend_volume

# Nginx Service Local Directories
NGINX_DIR = ./infra/nginx
NGINX_CONTAINER_NAME = nginx
NGINX_IMAGE_NAME = nginx:aelmrabe
NGINX_VOLUME_NAME = nginx_volume

# Database Service Local Directories
DATABASE_DIR = ./infra/postgres
DATABASE_CONTAINER_NAME = postgres
DATABASE_IMAGE_NAME = postgres:aelmrabe
DATABASE_VOLUME_NAME = postgres_volume
DATABASE_DATA_PATH = ./data/postgresdb

# Build and start all services
all: build up

# Build the frontend
build:
	chmod +x ./gpg_tools.sh
	./gpg_tools.sh decrypt
	@rm -rf ./.env.gpg
	@rm -rf ./ssl/key.pem.gpg
	@rm -rf ./ssl/cert.pem.gpg
	@mkdir -p $(DATA_DIR)
	@mkdir -p $(DATABASE_DATA_PATH)
	$(DCMD) build 

# Start all services
up:
	$(DCMD) up -d

# Stop the frontend
down:
	$(DCMD) down

# Restart the frontend
restart:
	$(DCMD) restart

# View frontend logs
logs:
	$(DCMD) logs -f

# Clean all services
clean: clean_frontend clean_backend clean_postgres clean_nginx
	@docker network rm $(NETWORK_NAME) 2>/dev/null || true

# force clean all services will delete all data 
fclean: fclean_frontend fclean_backend fclean_postgres clean_nginx

# Clean the frontend
clean_frontend:
	$(DCMD) stop $(FRONTEND_CONTAINER_NAME) 2>/dev/null || true
	@docker rm -f $(FRONTEND_CONTAINER_NAME) 2>/dev/null || true
	@docker rmi $(FRONTEND_IMAGE_NAME) 2>/dev/null || true
	@docker volume rm $(FRONTEND_VOLUME_NAME) 2>/dev/null || true

# remove the backend modul
clean_backend:
	$(DCMD) stop $(BACKEND_CONTAINER_NAME) 2>/dev/null || true
	@docker rm -f $(BACKEND_CONTAINER_NAME) 2>/dev/null || true
	@docker rmi $(BACKEND_IMAGE_NAME) 2>/dev/null || true
	@docker volume rm $(BACKEND_VOLUME_NAME) 2>/dev/null || true

# Clean the nginx
clean_nginx:
	$(DCMD) stop $(NGINX_CONTAINER_NAME) 2>/dev/null || true
	@docker rm -f $(NGINX_CONTAINER_NAME) 2>/dev/null || true
	@docker rmi $(NGINX_IMAGE_NAME) 2>/dev/null || true
	@docker volume rm $(NGINX_VOLUME_NAME) 2>/dev/null || true

clean_postgres:
	$(DCMD) stop $(DATABASE_CONTAINER_NAME) 2>/dev/null || true
	@docker rm -f $(DATABASE_CONTAINER_NAME) 2>/dev/null || true
	@docker rmi $(DATABASE_IMAGE_NAME) 2>/dev/null || true

fclean: fclean_frontend fclean_backend fclean_postgres fclean_nginx
	./gpg_tools.sh encrypt
	@rm -rf ./ssl/key.pem
	@rm -rf ./ssl/cert.pem
	@rm -rf ./.env


fclean_frontend: clean_frontend
	@rm -rf $(FRONTEND_DIR)/app/node_modules || true
	@rm -rf $(FRONTEND_DIR)/app/.next || true
	@rm -rf $(FRONTEND_DIR)/app/package-lock.json || true

fclean_backend: clean_backend
	@rm -rf $(BACKEND_DIR)/app/env || true
	@rm -rf $(BACKEND_DIR)/app/__pycache__ || true
	@rm -rf $(BACKEND_DIR)/app/migrations || true

fclean_postgres: clean_postgres
	@echo "Removing PostgreSQL data by recreating the volume..."
	@chown -R $(USER):$(USER) $(DATABASE_DATA_PATH) 2>/dev/null || true
	@docker volume rm postgres_data 2>/dev/null || true
	@rm -rf $(DATABASE_DATA_PATH) || true

fclean_nginx: clean_nginx
	@echo "Cleaning up remaining data directories..."
	@find $(DATA_DIR) -mindepth 1 -maxdepth 1 -not -name "postgresdb" -exec rm -rf {} \; 2>/dev/null || true

# Phony targets
.PHONY: all build up down restart logs clean fclean