FROM node:alpine

COPY app /serene
WORKDIR /serene
RUN npm install

ENTRYPOINT ["node", "./src/index.js"]
