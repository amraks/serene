#!/bin/sh

docker_ui_path=$(cd $(dirname $0) && pwd)
host_mount_path=$docker_ui_path/../../ui
container_mount_path=/ui
docker run -it --entrypoint /bin/ash -v $host_mount_path:$container_mount_path serene_ui_build
