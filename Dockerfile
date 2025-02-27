FROM node:23.8.0-alpine

ENV CI=1

ENV NODE_ENV=production

WORKDIR /server

COPY package*.json ./

RUN npm i

COPY . .

EXPOSE 3000

CMD [ "npm","run","start" ]
