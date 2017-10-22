FROM node:alpine

RUN apk update \
 && apk add docker

WORKDIR /serene

ENTRYPOINT ["./run.sh"]
