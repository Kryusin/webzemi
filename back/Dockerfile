FROM golang:latest

ENV ROOT=/go/src
WORKDIR ${ROOT}

ENV GO111MODULE=on

COPY ./alias/.alias /root/.bashrc

# RUN go get -u github.com/labstack/echo/v4
# RUN go get -u github.com/labstack/echo/v4/middleware