// const cookieSession = require("cookie-session"); // 有bug，TypeError: req.session.regenerate
const session = require('express-session')
const express = require("express");
const cors = require("cors");
require('dotenv').config()
const passportSetup = require("./config/passport");
const passport = require("passport");
const authRoute = require("./routes/auth");
const app = express();
const CLIENT_URL = require('./config/variable')

// app.use(cors());
app.use(
    cors({
        origin: ["http://localhost:5173", "https://twozwu.github.io", "https://1af1c4.deta.dev"], // 如果允許cookie攜帶就不能用'*'
        // origin: 'https://twozwu.github.io',
        methods: "GET,POST,PUT,DELETE", // 允許的方法
        credentials: true, // 允許cookie跨域攜帶
    })
);
// app.use((req, res, next) => {
//     res.header('Access-Control-Allow-Origin', 'https://twozwu.github.io');
//     next();
// });

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


app.get('/', (req, res) => {
    res.send('Hello World!');
})

app.use("/auth", authRoute);

const PORT = process.env.PORT || 8080;

app.listen(PORT, () => {
    console.log(`Server is running on port： ${PORT}`);
});

module.exports = app