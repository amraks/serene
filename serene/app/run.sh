#!/bin/sh

docker build -t python2:coderunner docker/python2

npm install
npm run dev
