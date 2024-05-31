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
	// noteValidator := validator.NewNoteValidator()
	userRepository := repository.NewUserRepository(db)
	// taskRepository := repository.NewTaskRepository(db)
	userUsecase := usecase.NewUserUsecase(userRepository, userValidator)
	// taskUsecase := usecase.NewTaskUsecase(taskRepository, taskValidator)
	userController := controller.NewUserController(userUsecase)
	// taskController := controller.NewTaskController(taskUsecase)
	e := router.NewRouter(userController)
	e.Logger.Fatal(e.Start(":1323"))
}