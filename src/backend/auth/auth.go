package auth

import (
	"net/http"
	"time"

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

    user.CreatedAt = time.Now()
    user.UpdatedAt = time.Now()

    if err:= models.DB.Create(&user).Error; err != nil {
		c.JSON(http.StatusBadRequest, gin.H{"error": err.Error()})
		return
    }

    c.JSON(http.StatusOK, gin.H{"message": "registration success"})
}

