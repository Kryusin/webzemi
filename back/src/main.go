package main

import (
	"net/http"

	"github.com/labstack/echo/v4"

	"sample.com/db"
)

func main() {
	db.NewDB()
	e := echo.New()
	e.GET("/", func(c echo.Context) error {
		return c.String(http.StatusOK, "Hello, world")
	})
	e.Logger.Fatal(e.Start(":1323"))
}