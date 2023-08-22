package controllers

import (
	"net/http"
	"github.com/CyberTea0X/delta_art/src/backend/utils/token"
	"github.com/CyberTea0X/delta_art/src/backend/models"
	"github.com/gin-gonic/gin"
)

// Structure describing the json fields that should be in the refresh request
type RefreshInput struct {
    RefreshToken string `json:"token" binding:"required"`
}

func (p *PublicController) Refresh(c *gin.Context) {

	var input RefreshInput

	if err := c.ShouldBindJSON(&input); err != nil {
		c.JSON(http.StatusBadRequest, gin.H{"error": err.Error()})
		return
	}
    old_token, err := token.RefreshTokenParse(input.RefreshToken)

    if err != nil {
		c.JSON(http.StatusBadRequest, err)
        return 
    }

    user_id, err := token.ExtractTokenID(old_token)

    if err != nil {
        c.JSON(http.StatusBadRequest, err)
        return 
    }

    refresh_token, err := token.GenerateRefreshToken(user_id)

    if err != nil {
		c.JSON(http.StatusBadRequest, err)
        return 
    }

    access_token, expires_at, err := token.GenerateAccessToken(user_id)

    refresh_model := models.RefreshToken{}
    refresh_model.Token = refresh_token
    refresh_model.UserID = user_id

    if _, err := refresh_model.SaveToken(p.DB); err != nil {
		c.JSON(http.StatusBadRequest, gin.H{"error": err.Error()})
    }

    models.DeleteRefreshToken(p.DB, input.RefreshToken)

    if err != nil {
		c.JSON(http.StatusBadRequest, err)
        return 
    }
    c.JSON(http.StatusOK, gin.H{
        "accessToken": access_token,
        "refreshToken": refresh_token,
        "expires_at": expires_at,
    })

}