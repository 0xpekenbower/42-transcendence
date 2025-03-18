# FROM python:3.13.2-alpine3.21
FROM python:3.13-alpine3.20

EXPOSE 8000

WORKDIR /root/
COPY ./app/ ./

RUN apk add --no-cache bash

RUN chmod +x start_back.sh

ENTRYPOINT ["bash", "./start_back.sh"]