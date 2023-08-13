package main

import (
    "fmt"
    "github.com/gin-gonic/gin"
)

func main() {
    router := gin.Default()
    router.GET("health_check", HealthCheck)

    fmt.Println("delta_art api server started on port 8080")

    router.Run()
}
