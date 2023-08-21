package models

import (
	"errors"
	"fmt"
	"html"
	"strings"
	"time"

	"github.com/CyberTea0X/delta_art/src/backend/utils/token"
	"github.com/jinzhu/gorm"
	"golang.org/x/crypto/bcrypt"
)

type User struct {
	gorm.Model
	Username string `gorm:"size:255;not null;" json:"username"`
	Password string `gorm:"size:255;not null;" json:"password"`
}

func (u *User) SaveUser() (*User, error) {
    u.CreatedAt = time.Now()
    u.UpdatedAt = time.Now()
	return u, DB.Create(&u).Error
}

func (u *User) BeforeSave() error {

	//turn password into hash
	hashedPassword, err := bcrypt.GenerateFromPassword([]byte(u.Password),bcrypt.DefaultCost)
	if err != nil {
		return err
	}
	u.Password = string(hashedPassword)

	//remove spaces in username 
	u.Username = html.EscapeString(strings.TrimSpace(u.Username))

	return nil

}

func VerifyPassword(password,hashedPassword string) error {
	return bcrypt.CompareHashAndPassword([]byte(hashedPassword), []byte(password))
}


func GetUserByID(uid uint) (User,error) {

	var u User

	if err := DB.First(&u,uid).Error; err != nil {
        return u, errors.New(fmt.Sprintf("User with id=%d not found", uid))
	}

	u.PrepareGive()
	
	return u,nil

}

func (u *User) PrepareGive(){
	u.Password = ""
}

type TokensData struct {
    AccessToken string
    RefreshToken string
    AccessTokenExpires int64
}


func Login(username string, password string) (TokensData, error) {
	
	var err error

	u := User{}

	err = DB.Model(User{}).Where("username = ?", username).Take(&u).Error

	if err != nil {
		return TokensData{}, err
	}

	err = VerifyPassword(password, u.Password)

	if err != nil && err == bcrypt.ErrMismatchedHashAndPassword {
		return TokensData{}, err
	}

	access_token, expires, err := token.GenerateAccessToken(u.ID)

	if err != nil {
		return TokensData{}, err
	}

    refresh_token, err := token.GenerateRefreshToken(u.ID)

    if err != nil {
		return TokensData{}, err
	}

	return TokensData{access_token, refresh_token, expires}, err
	
}
