#!/bin/bash

set -e

docker-compose build --force-rm
docker-compose up
