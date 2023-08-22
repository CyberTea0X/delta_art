package controllers

import (
	"net/http"

	"github.com/CyberTea0X/delta_art/src/backend/models"
	"github.com/CyberTea0X/delta_art/src/backend/utils/token"
	"github.com/dgrijalva/jwt-go"
	"github.com/gin-gonic/gin"
)


func (p *PublicController) CurrentUser(c *gin.Context){
    maybe_token, _ := c.Get("access_token")

    jwt_token := maybe_token.(*jwt.Token)
    
    
	user_id, err := token.ExtractTokenID(jwt_token)
	
	if err != nil {
		c.JSON(http.StatusBadRequest, gin.H{"error": err.Error()})
		return
	}
	
	u,err := models.GetUserByID(p.DB, user_id)
	
	if err != nil {
		c.JSON(http.StatusBadRequest, gin.H{"error": err.Error()})
		return
	}

	c.JSON(http.StatusOK, gin.H{"message":"success","data":u})
}
