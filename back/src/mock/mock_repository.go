package mock

import (
	"sample.com/model"

	"github.com/stretchr/testify/mock"
)

type MockUserRepository struct {
	mock.Mock
}

func (m *MockUserRepository) CreateUser(user *model.User) error {
	args := m.Called(user)
	return args.Error(0)
}

func (m *MockUserRepository) GetUserByEmail(user *model.User, email string) error {
	args := m.Called(user, email)
	return args.Error(0)
}
