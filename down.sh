#bin/bash

cd Application/frontend
docker-compose down -v

cd ../backend
docker-compose down -v

cd ../../Gateway
docker-compose down -v

cd ../Infrastructure
docker-compose down -v