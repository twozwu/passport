// const cookieSession = require("cookie-session"); // 有bug，TypeError: req.session.regenerate
const session = require('express-session') 
const express = require("express");
const cors = require("cors");
require('dotenv').config()
const passportSetup = require("./config/passport");
const passport = require("passport");
const authRoute = require("./routes/auth");
const app = express();

// app.use(
//     cookieSession({ name: "session", keys: ["lama"], maxAge: 24 * 60 * 60 * 100 })
// );
app.use(session({
    secret: 'keyboard cat',
    resave: false,
    saveUninitialized: true,
    // cookie: { secure: true }
  }))

app.use(passport.initialize());
app.use(passport.session());

app.use(
    cors({
        origin: "http://localhost:5173",
        methods: "GET,POST,PUT,DELETE",
        credentials: true,
    })
);

app.use("/auth", authRoute);

app.listen("5000", () => {
    console.log("Server is running on port： 5000");
});