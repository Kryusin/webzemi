package model

import "time"

type Note struct {
	ID                uint       `json:"id" gorm:"primaryKey"`
	UserID            string     `json:"user_id"`
	ErrorTitle        string     `json:"error_title"`
	Language          string     `json:"language"`
	ErrorDetails      string     `json:"error_details"`
	BeforeCode        string     `json:"beforeCode"`
	ErrorReasonError  string     `json:"error_reason_error"`
	SolutionDetails   string     `json:"solution_details"`
	AfterCode         string     `json:"afterCode"`
	CreatedAt         time.Time  `json:"created_at"`
	UpdatedAt         time.Time  `json:"updated_at"`
}