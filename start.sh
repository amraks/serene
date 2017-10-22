#!/bin/bash

set -e

docker volume create --name coderunner
docker volume create --name mongostore
docker-compose -p david build --force-rm
docker-compose -p david up
