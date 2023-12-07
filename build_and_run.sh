#!/bin/sh
mvn clean install -Pproduction
docker compose up -d
