# delta_art
Complete rewrite of my course work all by myself using Go for backend (gorm, gin, jwt) and Typescript(next.js)

## Main objectives:
 - JWT with refresh and access tokens for safety
 - Websockets for chat
 - Cloud or some database as images storage
 - Try ORM

Current features/objectives implemented:
 - JWT with refresh and access tokens for safety
 - ORM on backend
 - Pages [internationalization](https://next-intl-docs.vercel.app/)
 - [MUI](https://mui.com/) for design

## Project structure

There are only two directories where you can find all my code:
 - frontend
 - backend

## How to run my project

In order to run my project you should run backend and frontend part
and also have a mysql server.

first, clone my project:

HTTPS:
```bash
git clone https://github.com/CyberTea0X/delta_art.git
```

SSH:
```bash
git clone git@github.com:CyberTea0X/delta_art.git
```

### frontend

Make sure you installed node.js and have latest version of it
Then go to the frontend directory and run

```bash
npm install
npm run dev
```

 > Now the front and back are not connected, so for the front end to work it is not necessary to launch the back yet.

### backend

Make sure you installed:
 - golang, at least 1.21 version.
 - mysql

Then go to the backend directory and create .env file like this:

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
Then type

```bash
go run .
```

That should launch the backend part


