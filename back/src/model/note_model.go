package model

import "time"

type ErrorNote struct {
	ID                uint       `json:"id" gorm:"primaryKey"`
	ErrorTitle        string     `json:"error_title"`
	language          string     `json:"language "`
	ErrorDetails      string     `json:"error_details"`
	BeforeCode        string     `json:"beforeCode "`
	ErrorReasonError  string     `json:"error_reason_error"`
	SolutionDetails   string     `json:"solution_details"`
	AfterCode         string     `json:"afterCode"`
	CreatedAt         time.Time  `json:"created_at"`
	UpdatedAt         time.Time  `json:"updated_at"`
}