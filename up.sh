#!/bin/bash

set -e

cd Infrastructure
docker compose up -d --build

cd ../Application/backend
docker compose up -d --build

cd ../frontend
docker compose up -d --build

cd ../../Gateway
docker compose up -d --build