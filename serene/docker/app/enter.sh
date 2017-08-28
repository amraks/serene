#!/bin/sh

docker_ui_path=$(cd $(dirname $0) && pwd)
host_mount_path=$docker_ui_path/../../app
container_mount_path=/serene
docker run -it --entrypoint /bin/ash -v $host_mount_path:$container_mount_path serene_serene
