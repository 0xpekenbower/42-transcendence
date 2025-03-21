FROM node:22-alpine3.20

WORKDIR /app

COPY package*.json ./
RUN npm install --legacy-peer-deps --loglevel=error

COPY . .

CMD ["npm", "run", "dev"]