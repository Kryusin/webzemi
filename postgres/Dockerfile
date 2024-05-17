FROM postgres:latest

ENV POSTGRES_USER=legacyvault
ENV POSTGRES_PASSWORD=legacyvault
ENV POSTGRES_DB=legacyvault

RUN apt-get update && apt-get install -y vim
COPY ./alias/.alias /root/.bashrc