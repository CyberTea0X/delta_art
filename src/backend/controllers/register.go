package controllers

import (
	"net/http"
	"github.com/CyberTea0X/delta_art/src/backend/models"
	"github.com/gin-gonic/gin"
)

type RegisterInput struct {
	Username string `json:"username" binding:"required"`
	Password string `json:"password" binding:"required"`
}

func Register(c *gin.Context) {

    var input RegisterInput

    if err := c.ShouldBindJSON(&input); err != nil {
		c.JSON(http.StatusBadRequest, gin.H{"error": err.Error()})
		return
	}

    user := models.User{}

	user.Username = input.Username
	user.Password = input.Password

    if _, err := user.SaveUser(); err != nil {
		c.JSON(http.StatusBadRequest, gin.H{"error": err.Error()})
    }

    c.JSON(http.StatusOK, gin.H{"message": "registration success"})
}

