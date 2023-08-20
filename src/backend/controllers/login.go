package controllers

import (
	"github.com/CyberTea0X/delta_art/src/backend/models"
	"github.com/gin-gonic/gin"
	"net/http"
)

// Structure describing the json fields that should be in the login request
type LoginInput struct {
	Username string `json:"username" binding:"required"`
	Password string `json:"password" binding:"required"`
}

// Функция, которая отвечает за авторизацию пользователя.
// В ответ на успешный запрос на авторизацию возвращает JWT токен
func Login(c *gin.Context) {

	var input LoginInput

	if err := c.ShouldBindJSON(&input); err != nil {
		c.JSON(http.StatusBadRequest, gin.H{"error": err.Error()})
		return
	}

	u := models.User{}

	u.Username = input.Username
	u.Password = input.Password

	token, err := models.Login(u.Username, u.Password)

	if err != nil {
		c.JSON(http.StatusBadRequest, gin.H{"error": "username or password is incorrect."})
		return
	}

	c.JSON(http.StatusOK, gin.H{"token": token})

}
