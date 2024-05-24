package validatorpackage validator

import (
	"sample.com/model"

	validation "github.com/go-ozzo/ozzo-validation/v4"
	"github.com/go-ozzo/ozzo-validation/v4/is"
)

type INoteValidator interface {
	NoteValidate(note model.Note) error
}

type noteValidator struct{}

func NewNoteValidator() INoteValidator {
	return &noteValidator{}
}

func (nv *noteValidator) NoteValidate(note model.Note) error {
	return validation.ValidateStruct(&note,
		validation.Field(
			&note.ErrorTitle,
			validation.Required.Error("error_title is required"),
			validation.RuneLength(1,).Error("Please enter at least one character"),
		),
		validation.Field(
			&note.language,
			validation.Required.Error("language is required"),
			validation.RuneLength(1,).Error("Please enter at least one character"),
		),
		validation.Field(
			&user.ErrorDetails,
			validation.Required.Error("error_details is required"),
			validation.RuneLength(1,).Error("Please enter at least one character"),
		),
		validation.Field(
			&note.BeforeCode,
			validation.Required.Error("beforeCode is required"),
			validation.RuneLength(1,).Error("Please enter at least one character"),
		),
		validation.Field(
			&note.ErrorReasonError,
			validation.Required.Error("error_reason_error is required"),
			validation.RuneLength(1,).Error("Please enter at least one character"),
		),
		validation.Field(
			&note.SolutionDetails,
			validation.Required.Error("solution_details is required"),
			validation.RuneLength(1,).Error("Please enter at least one character"),
		),
		validation.Field(
			&note.AfterCode,
			validation.Required.Error("afterCode is required"),
			validation.RuneLength(1,).Error("Please enter at least one character"),
		),
	)
}