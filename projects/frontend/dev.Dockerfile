FROM node:20.12.2-alpine

WORKDIR /app

COPY package*json ./

RUN npm ci

COPY . .

EXPOSE 3000

CMD ["npm", "run", "dev"]