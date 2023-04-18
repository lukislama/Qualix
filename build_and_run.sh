#!/bin/sh
mvn clean install
docker build . -t lampview:latest
docker run -p 8080:8080 lampview:latest
