package model

import "time"

type Note struct {
	ID                uint       `json:"id" gorm:"primaryKey;autoIncrement"`
	ErrorTitle        string     `json:"error_title"`
	Language          string     `json:"language"`
	ErrorDetails      string     `json:"error_detail"`
	BeforeCode        string     `json:"before_code"`
	ErrorReasonError  string     `json:"error_reason"`
	SolutionDetails   string     `json:"solution_detail"`
	AfterCode         string     `json:"after_code"`
	CreatedAt         time.Time  `json:"created_at"`
	UpdatedAt         time.Time  `json:"updated_at"`
	User      User      `json:"user" gorm:"foreignKey:UserId; constraint:OnDelete:CASCADE"`
	UserId    uint      `json:"user_id" gorm:"not null"`
}