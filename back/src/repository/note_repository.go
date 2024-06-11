package repository

import (
	"fmt"
	"sample.com/model"

	"gorm.io/gorm"
	"gorm.io/gorm/clause"
)

type INoteRepository interface {
	GetAllNotes(notes *[]model.Note, userId uint) error
	GetNoteById(note *model.Note, userId uint, noteId uint) error
	CreateNote(note *model.Note) error
	UpdateNote(note *model.Note, userId uint, noteId uint) error
	DeleteNote(userId uint, noteId uint) error
}

type noteRepository struct {
	db *gorm.DB
}

func NewNoteRepository(db *gorm.DB) INoteRepository {
	return &noteRepository{db}
}

func (nr *noteRepository) GetAllNotes(notes *[]model.Note, userId uint) error {
	if err := nr.db.Joins("User").Where("user_id=?", userId).Order("language").Find(notes).Error; err != nil {
		return err
	}
	return nil
}

func (nr *noteRepository) GetNoteById(note *model.Note, userId uint, noteId uint) error {
	if err := nr.db.Joins("User").Where("user_id=?", userId).First(note, noteId).Error; err != nil {
		return err
	}
	return nil
}

func (nr *noteRepository) CreateNote(note *model.Note) error {
	if err := nr.db.Create(note).Error; err != nil {
		return err
	}
	return nil
}

func (nr *noteRepository) UpdateNote(note *model.Note, userId uint, noteId uint) error {
	result := nr.db.Model(note).Clauses(clause.Returning{}).Where("id=? AND user_id=?", noteId, userId).Update("error_title", note.ErrorTitle)
	if result.Error != nil {
		return result.Error
	}
	if result.RowsAffected < 1 {
		return fmt.Errorf("object does not exist")
	}
	return nil
}

func (nr *noteRepository) DeleteNote(userId uint, noteId uint) error {
	result := nr.db.Where("id=? AND user_id=?", noteId, userId).Delete(&model.Note{})
	if result.Error != nil {
		return result.Error
	}
	if result.RowsAffected < 1 {
		return fmt.Errorf("object does not exist")
	}
	return nil
}