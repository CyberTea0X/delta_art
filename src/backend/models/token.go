package models

import (
	"errors"
	"fmt"
	"time"

	"github.com/jinzhu/gorm"
)

type RefreshToken struct {
	gorm.Model
	Token string `gorm:"size:255;not null;" json:"token"`
    UserID uint
}

func (t *RefreshToken) SaveToken(db *gorm.DB) (*RefreshToken, error) {
    t.CreatedAt = time.Now()
    t.UpdatedAt = time.Now()
	return t, db.Create(&t).Error
}

func DeleteRefreshToken(db *gorm.DB, token string) error {

	var t RefreshToken

    if err := db.Where("token = ?", token).Unscoped().Delete(&t).Error; err != nil {
        return errors.New(fmt.Sprintf("token %s not found in DB", token))
	}

    return nil
}
