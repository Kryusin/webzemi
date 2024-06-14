package usecase

import (
	"testing"

	"sample.com/model"
	mockRepo "sample.com/mock"

	"github.com/stretchr/testify/assert"
	testifyMock "github.com/stretchr/testify/mock"
	"golang.org/x/crypto/bcrypt"
)

func TestSignUp(t *testing.T) {
	mockRepoInstance := new(mockRepo.MockUserRepository)
	mockValidator := new(mockRepo.MockUserValidator)
	usecase := NewUserUsecase(mockRepoInstance, mockValidator)

	user := model.User{Email: "test@example.com", Password: "password", Name: "Test User"}
	mockValidator.On("UserValidate", user).Return(nil)
	mockRepoInstance.On("CreateUser", testifyMock.AnythingOfType("*model.User")).Return(nil)

	resp, err := usecase.SignUp(user)
	assert.NoError(t, err)
	assert.Equal(t, user.Email, resp.Email)
	assert.Equal(t, user.Name, resp.Name)
	mockRepoInstance.AssertExpectations(t)
	mockValidator.AssertExpectations(t)
}

func BenchmarkSignUp(b *testing.B) {
	mockRepoInstance := new(mockRepo.MockUserRepository)
	mockValidator := new(mockRepo.MockUserValidator)
	usecase := NewUserUsecase(mockRepoInstance, mockValidator)

	b.RunParallel(func(pb *testing.PB) {
		for pb.Next() {
			user := model.User{Email: "test@example.com", Password: "password", Name: "Test User"}
			mockValidator.On("UserValidate", user).Return(nil)
			mockRepoInstance.On("CreateUser", testifyMock.AnythingOfType("*model.User")).Return(nil)
			_, err := usecase.SignUp(user)
			assert.NoError(b, err)
		}
	})
	mockRepoInstance.AssertExpectations(b)
	mockValidator.AssertExpectations(b)
}

func TestLogin(t *testing.T) {
	mockRepoInstance := new(mockRepo.MockUserRepository)
	mockValidator := new(mockRepo.MockUserValidator)
	usecase := NewUserUsecase(mockRepoInstance, mockValidator)

	user := model.User{Email: "test@example.com", Password: "password"}
	hashedPassword, _ := bcrypt.GenerateFromPassword([]byte("password"), bcrypt.DefaultCost)
	storedUser := model.User{ID: 1, Email: "test@example.com", Password: string(hashedPassword)}
	mockValidator.On("LoginValidate", user).Return(nil)
	mockRepoInstance.On("GetUserByEmail", testifyMock.AnythingOfType("*model.User"), user.Email).Return(nil).Run(func(args testifyMock.Arguments) {
		arg := args.Get(0).(*model.User)
		*arg = storedUser
	})

	token, resp, err := usecase.Login(user)
	assert.NoError(t, err)
	assert.NotEmpty(t, token)
	assert.Equal(t, storedUser.Email, resp.Email)
	assert.Equal(t, storedUser.Name, resp.Name)
	mockRepoInstance.AssertExpectations(t)
	mockValidator.AssertExpectations(t)
}

func BenchmarkLogin(b *testing.B) {
	mockRepoInstance := new(mockRepo.MockUserRepository)
	mockValidator := new(mockRepo.MockUserValidator)
	usecase := NewUserUsecase(mockRepoInstance, mockValidator)

	b.RunParallel(func(pb *testing.PB) {
		for pb.Next() {
			user := model.User{Email: "test@example.com", Password: "password"}
			hashedPassword, _ := bcrypt.GenerateFromPassword([]byte("password"), bcrypt.DefaultCost)
			storedUser := model.User{ID: 1, Email: "test@example.com", Password: string(hashedPassword)}
			mockValidator.On("LoginValidate", user).Return(nil)
			mockRepoInstance.On("GetUserByEmail", testifyMock.AnythingOfType("*model.User"), user.Email).Return(nil).Run(func(args testifyMock.Arguments) {
				arg := args.Get(0).(*model.User)
				*arg = storedUser
			})
			_, _, err := usecase.Login(user)
			assert.NoError(b, err)
		}
	})
	mockRepoInstance.AssertExpectations(b)
	mockValidator.AssertExpectations(b)
}
