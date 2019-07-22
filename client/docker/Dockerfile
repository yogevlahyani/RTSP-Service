FROM node:8.11.1-alpine

# set working directory
RUN mkdir /app
WORKDIR /app

# install and cache app dependencies
COPY package.json .
COPY package-lock.json .

RUN npm install

COPY . .

CMD npm run start