package main

import (

	// "github.com/labstack/echo/v4"

	"sample.com/db"
	"sample.com/repository"
	"sample.com/usecase"
	"sample.com/validator"
	"sample.com/controller"
	"sample.com/router"
)

// , taskController
func main() {
	db := db.NewDB()
	userValidator := validator.NewUserValidator()
	noteValidator := validator.NewNoteValidator()
	userRepository := repository.NewUserRepository(db)
	noteRepository := repository.NewNoteRepository(db)
	userUsecase := usecase.NewUserUsecase(userRepository, userValidator)
	noteUsecase := usecase.NewNoteUsecase(noteRepository, noteValidator)
	userController := controller.NewUserController(userUsecase)
	noteController := controller.NewNoteController(noteUsecase)
	e := router.NewRouter(userController,noteController)
	e.Logger.Fatal(e.Start(":1323"))
}