FROM golang:stretch

RUN apt-get update && apt-get install -y git make clang
RUN go get github.com/Shopify/sarama
RUN cd src/github.com/Shopify/sarama && make install_dependencies && make
