FROM golang:latest

ENV ROOT=/go/src
WORKDIR ${ROOT}

ENV GO111MODULE=on

RUN go install github.com/cosmtrek/air@latest
# RUN go get -u github.com/labstack/echo/v4
# RUN go get -u github.com/labstack/echo/v4/middleware