package controller

import (
	"sample.com/model"
	"sample.com/usecase"
	"net/http"
	"strconv"
	"log"
	"fmt"

	"github.com/golang-jwt/jwt/v5"
	"github.com/labstack/echo/v4"
)

type INoteController interface {
	GetAllNotes(c echo.Context) error
	CreateNote(c echo.Context) error
	UpdateNote(c echo.Context) error
	DeleteNote(c echo.Context) error
}

type noteController struct {
	nu usecase.INoteUsecase
}

func NewNoteController(nu usecase.INoteUsecase) INoteController {
	return &noteController{nu}
}

func (nc *noteController) GetAllNotes(c echo.Context) error {
	user := c.Get("user").(*jwt.Token)
	claims := user.Claims.(jwt.MapClaims)
	userId := claims["user_id"]
	log.Print(userId)

	notesRes, err := nc.nu.GetAllNotes(uint(userId.(float64)))
	if err != nil {
		return c.JSON(http.StatusInternalServerError, err.Error())
	}
	return c.JSON(http.StatusOK, notesRes)
}

func (nc *noteController) GetNoteById(c echo.Context) error {
	user := c.Get("user").(*jwt.Token)
	claims := user.Claims.(jwt.MapClaims)
	userId := claims["user_id"]
	id := c.Param("noteId")
	noteId, _ := strconv.Atoi(id)
	noteRes, err := nc.nu.GetNoteById(uint(userId.(float64)), uint(noteId))
	if err != nil {
		return c.JSON(http.StatusInternalServerError, err.Error())
	}
	return c.JSON(http.StatusOK, noteRes)
}

func (nc *noteController) CreateNote(c echo.Context) error {
	user := c.Get("user").(*jwt.Token)
	claims := user.Claims.(jwt.MapClaims)
	userId := claims["user_id"]

	note := model.Note{}
	if err := c.Bind(&note); err != nil {
		return c.JSON(http.StatusBadRequest, err.Error())
	}
	note.UserId = uint(userId.(float64))
	noteRes, err := nc.nu.CreateNote(note)
	if err != nil {
		return c.JSON(http.StatusInternalServerError, err.Error())
	}
	return c.JSON(http.StatusCreated, noteRes)
}

func (nc *noteController) UpdateNote(c echo.Context) error {
	user := c.Get("user").(*jwt.Token)
	claims := user.Claims.(jwt.MapClaims)
	userId := claims["user_id"]
	id := c.Param("noteId")
	noteId, _ := strconv.Atoi(id)

	fmt.Println("controller")

	note := model.Note{}
	if err := c.Bind(&note); err != nil {
		return c.JSON(http.StatusBadRequest, err.Error())
	}
	noteRes, err := nc.nu.UpdateNote(note, uint(userId.(float64)), uint(noteId))
	if err != nil {
		return c.JSON(http.StatusInternalServerError, err.Error())
	}
	return c.JSON(http.StatusOK, noteRes)
}

func (nc *noteController) DeleteNote(c echo.Context) error {
	user := c.Get("user").(*jwt.Token)
	claims := user.Claims.(jwt.MapClaims)
	userId := claims["user_id"]
	id := c.Param("noteId")
	noteId, _ := strconv.Atoi(id)

	err := nc.nu.DeleteNote(uint(userId.(float64)), uint(noteId))
	if err != nil {
		return c.JSON(http.StatusInternalServerError, err.Error())
	}
	return c.NoContent(http.StatusNoContent)
}