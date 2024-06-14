package mock

import (
	"sample.com/model"

	"github.com/stretchr/testify/mock"
)

type MockUserValidator struct {
	mock.Mock
}

func (m *MockUserValidator) UserValidate(user model.User) error {
	args := m.Called(user)
	return args.Error(0)
}

func (m *MockUserValidator) LoginValidate(user model.User) error {
	args := m.Called(user)
	return args.Error(0)
}
