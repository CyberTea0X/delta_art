package main 

import (
    "github.com/gin-gonic/gin"
    "net/http"
)

func HealthCheck(c *gin.Context) {
    c.String(http.StatusOK, "Server is alive!")
}
