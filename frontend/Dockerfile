FROM node:22-alpine3.20

WORKDIR /app

COPY app/package*.json ./
RUN npm install --legacy-peer-deps --loglevel=error

COPY app/. .
RUN npm run build

CMD ["npm", "run", "start"]