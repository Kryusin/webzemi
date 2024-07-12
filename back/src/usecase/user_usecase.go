package usecase

import (
	"os"
	"time"

	"sample.com/model"
	"sample.com/repository"
	"sample.com/validator"

	"github.com/golang-jwt/jwt/v5"
	"golang.org/x/crypto/bcrypt"
	"strconv"
)

type IUserUsecase interface {
	SignUp(user model.User) (model.UserResponse, error)
	Login(user model.User) (string, model.UserResponse, error)
}

type userUsecase struct {
	ur         repository.IUserRepository
	uv         validator.IUserValidator
	jwtSecret  string
	bcryptCost int
}

func NewUserUsecase(ur repository.IUserRepository, uv validator.IUserValidator) IUserUsecase {
	jwtSecret := os.Getenv("SECRET")
	bcryptCost := 2 // コストをさらに低く設定
	if costStr := os.Getenv("BCRYPT_COST"); costStr != "" {
		if cost, err := strconv.Atoi(costStr); err == nil {
			bcryptCost = cost
		}
	}
	return &userUsecase{ur, uv, jwtSecret, bcryptCost}
}

func (uu *userUsecase) SignUp(user model.User) (model.UserResponse, error) {
	if err := uu.uv.UserValidate(user); err != nil {
		return model.UserResponse{}, err
	}
	hash, err := bcrypt.GenerateFromPassword([]byte(user.Password), uu.bcryptCost)
	if err != nil {
		return model.UserResponse{}, err
	}
	newUser := model.User{Email: user.Email, Password: string(hash), Name: user.Name}
	if err := uu.ur.CreateUser(&newUser); err != nil {
		return model.UserResponse{}, err
	}
	return model.UserResponse{ID: newUser.ID, Email: newUser.Email, Name: newUser.Name}, nil
}

func (uu *userUsecase) Login(user model.User) (string, model.UserResponse, error) {
	if err := uu.uv.LoginValidate(user); err != nil {
		return "", model.UserResponse{}, err
	}
	var storedUser model.User
	if err := uu.ur.GetUserByEmail(&storedUser, user.Email); err != nil {
		return "", model.UserResponse{}, err
	}
	if err := bcrypt.CompareHashAndPassword([]byte(storedUser.Password), []byte(user.Password)); err != nil {
		return "", model.UserResponse{}, err
	}
	token := jwt.NewWithClaims(jwt.SigningMethodHS256, jwt.MapClaims{
		"user_id": storedUser.ID,
		"exp":     time.Now().Add(12 * time.Hour).Unix(),
	})
	tokenString, err := token.SignedString([]byte(uu.jwtSecret))
	if err != nil {
		return "", model.UserResponse{}, err
	}
	return tokenString, model.UserResponse{ID: storedUser.ID, Email: storedUser.Email, Name: storedUser.Name}, nil
}
