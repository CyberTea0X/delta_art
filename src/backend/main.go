package main

import (
    "fmt"
    "github.com/gin-gonic/gin"
    "github.com/CyberTea0X/delta_art/src/backend/controllers"
    "github.com/CyberTea0X/delta_art/src/backend/models"
    "github.com/CyberTea0X/delta_art/src/backend/middlewares"
)

func main() {
    models.ConnectDataBase()

    port := "8080"
    router := gin.Default()

    public := router.Group("api")
    public.GET("health_check", HealthCheck)
    public.POST("register", controllers.Register)
    public.POST("login", controllers.Login)

    protected := router.Group("api")
    protected.Use(middlewares.JwtAuthMiddleware())
    protected.GET("/user", controllers.CurrentUser)
    fmt.Println("delta_art api server starting on port ", port)

    router.Run(":" + port)
}
