FROM node:15.10.0-buster-slim

EXPOSE 3000

WORKDIR /todo-app

COPY package.json .

RUN npm install

COPY . /todo-app

CMD npm run dev