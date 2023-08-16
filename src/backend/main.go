package main

import (
    "fmt"
    "github.com/gin-gonic/gin"
    "github.com/CyberTea0X/delta_art/src/backend/auth"
    "github.com/CyberTea0X/delta_art/src/backend/models"
)

func main() {
    models.ConnectDataBase()

    port := "8080"
    router := gin.Default()

    public := router.Group("api")
    public.GET("health_check", HealthCheck)
    public.POST("register", auth.Register)
    fmt.Println("delta_art api server starting on port ", port)

    router.Run(":" + port)
}
