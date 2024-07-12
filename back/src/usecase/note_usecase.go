package usecase

import (
	"sample.com/model"
	"sample.com/repository"
	"sample.com/validator"
	"log"
	"fmt"
)

type INoteUsecase interface {
	GetAllNotes(userId uint) ([]model.Note, error)
	GetNoteById(userId uint, noteId uint) (model.Note, error)
	CreateNote(note model.Note) (model.Note, error)
	UpdateNote(note model.Note, userId uint, noteId uint) (model.Note, error)
	DeleteNote(userId uint, noteId uint) error
}

type noteUsecase struct {
	nr repository.INoteRepository
	nv validator.INoteValidator
}

func NewNoteUsecase(nr repository.INoteRepository, nv validator.INoteValidator) INoteUsecase {
	return &noteUsecase{nr, nv}
}

func (nu *noteUsecase) GetAllNotes(userId uint) ([]model.Note, error) {
	notes := []model.Note{}
	if err := nu.nr.GetAllNotes(&notes, userId); err != nil {
		return nil, err
	}
	resNotes := []model.Note{}
	log.Print(notes)
	for _, note := range notes {
		n := model.Note{
			ID:        note.ID,
			ErrorTitle: note.ErrorTitle,
			Language: note.Language,
			ErrorDetails: note.ErrorDetails,
			BeforeCode: note.BeforeCode,
			ErrorReason: note.ErrorReason,
			SolutionDetails: note.SolutionDetails,
			AfterCode: note.AfterCode ,
			CreatedAt: note.CreatedAt,
			UpdatedAt: note.UpdatedAt,
			UserId : note.UserId,
		}
		resNotes = append(resNotes, n)
	}
	return resNotes, nil
}

func (nu *noteUsecase) GetNoteById(userId uint, noteId uint) (model.Note, error) {
	note := model.Note{}
	if err := nu.nr.GetNoteById(&note, userId, noteId); err != nil {
		return model.Note{}, err
	}
	resNote := model.Note{
		ID:        note.ID,
		ErrorTitle:note.ErrorTitle,
		CreatedAt: note.CreatedAt,
		UpdatedAt: note.UpdatedAt,
	}
	return resNote, nil
}

func (nu *noteUsecase) CreateNote(note model.Note) (model.Note, error) {
	if err := nu.nv.NoteValidate(note); err != nil {
		return model.Note{}, err
	}
	if err := nu.nr.CreateNote(&note); err != nil {
		return model.Note{}, err
	}
	
	resNote := model.Note{
		ID:        note.ID,
		ErrorTitle: note.ErrorTitle,
		Language: note.Language,
		ErrorDetails: note.ErrorDetails,
		BeforeCode: note.BeforeCode,
		ErrorReason: note.ErrorReason,
		SolutionDetails: note.SolutionDetails,
		AfterCode: note.AfterCode ,
		CreatedAt: note.CreatedAt,
		UpdatedAt: note.UpdatedAt,
	}
	return resNote, nil
}

func (nu *noteUsecase) UpdateNote(note model.Note, userId uint, noteId uint) (model.Note, error) {
	fmt.Println("usecase")
	fmt.Println(note.ErrorDetails)
	fmt.Println(note.ID)
	if err := nu.nv.NoteValidate(note); err != nil {
		fmt.Println("Validate error")
		return model.Note{}, err
	}
	fmt.Println("Validate")
	if err := nu.nr.UpdateNote(&note, userId, noteId); err != nil {
		return model.Note{}, err
	}
	resNote := model.Note{
		ID:        note.ID,
		ErrorTitle: note.ErrorTitle,
		Language: note.Language,
		ErrorDetails: note.ErrorDetails,
		BeforeCode: note.BeforeCode,
		ErrorReason: note.ErrorReason,
		SolutionDetails: note.SolutionDetails,
		AfterCode: note.AfterCode ,
		CreatedAt: note.CreatedAt,
		UpdatedAt: note.UpdatedAt,
	}
	return resNote, nil
}

func (nu *noteUsecase) DeleteNote(userId uint, noteId uint) error {
	if err := nu.nr.DeleteNote(userId, noteId); err != nil {
		return err
	}
	return nil
}