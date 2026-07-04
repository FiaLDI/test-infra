#bin/bash
cd Application/frontend
docker-compose up -d --build

cd ../backend
docker-compose up -d --build

cd ../../Gateway
docker-compose up -d --build
 