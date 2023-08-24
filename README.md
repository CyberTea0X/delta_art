# delta_art
Complete rewrite of my course work all by myself using Go for backend (gorm, gin, jwt) and Typescript(sweltejs)

## Main objectives:
 - JWT with refresh and access tokens for safety
 - Websockets for chat
 - Cloud or some database as images storage
 - Try ORM

## Backend .env template

```bash
DB_HOST=127.0.0.1                       
DB_DRIVER=mysql                          
DB_USER=someuser
DB_PASSWORD=somepw
DB_NAME=somedb
DB_PORT=3306 
ACCESS_TOKEN_SECRET=secret1
REFRESH_TOKEN_SECRET=secret2
ACCESS_TOKEN_MINUTE_LIFESPAN=15
REFRESH_TOKEN_HOUR_LIFESPAN=8760
```
