#!/bin/sh
mvn clean install -Pproduction
docker build . -t lampview:latest
docker run -it -p 8080:8080 lampview:latest
