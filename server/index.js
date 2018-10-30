require("dotenv").config()

const express = require("express")
const massive = require("massive")
const session = require("express-session")
// const passport = require("passport")
const { json } = require("body-parser")
const port = 3001
// var cors = require("cors")

const app = express()

app.use(json())

massive(process.env.CONNECTION_STRING)
  .then((dbInstance) => {
    app.set("db", dbInstance)
  })
  .catch(console.log)

app.use(
  session({
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: false,
    cookie: {
      maxAge: 604800
    }
  })
)

app.use("/", express.static(__dirname + "/public"))

app.listen(port, function() {
  console.log("Sim3 server listening on port", port)
})
