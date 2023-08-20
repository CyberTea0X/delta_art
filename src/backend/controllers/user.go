package controllers

import (
	"net/http"
	"github.com/gin-gonic/gin"
    "github.com/CyberTea0X/delta_art/src/backend/models"
    "github.com/CyberTea0X/delta_art/src/backend/utils/token"
)


func CurrentUser(c *gin.Context){

	user_id, err := token.ExtractTokenID(c)
	
	if err != nil {
		c.JSON(http.StatusBadRequest, gin.H{"error": err.Error()})
		return
	}
	
	u,err := models.GetUserByID(user_id)
	
	if err != nil {
		c.JSON(http.StatusBadRequest, gin.H{"error": err.Error()})
		return
	}

	c.JSON(http.StatusOK, gin.H{"message":"success","data":u})
}
