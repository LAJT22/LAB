FROM node:20.12.2-alpine

WORKDIR /app

COPY package*json ./

RUN npm install -g npm@10.6.0

RUN npm ci

COPY ./ ./

EXPOSE 8080

CMD ["npm", "run", "start:dev"]