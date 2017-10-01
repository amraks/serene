#!/bin/bash

set -e

docker-compose -f docker-compose-test.yml build --force-rm
docker-compose -f docker-compose-test.yml run app_mongo_test
