FROM node:alpine

ADD app /serene
WORKDIR /serene
RUN npm install

ENTRYPOINT ["node", "./src/index.js"]
