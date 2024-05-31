FROM golang:latest

ENV ROOT=/go/src
WORKDIR ${ROOT}

ENV GO111MODULE=on

COPY ./alias/.alias /root/.bashrc

RUN GO_ENV=dev go mod tidy && GO_ENV=dev go run migrate/migrate.go