const express = require("express");
const expresslayouts = require("express-ejs-layouts");

const db = require("./src/config/mongoose");
// const db = require("./src/");

const app = express();
const PORT = 4000;

const passport = require("passport");
const LocalStretegy = require("./src/config/passport_local_stretegy");
const googleStretegy = require("./src/config/passport-google-oauth2-stretegy");

const session = require("express-session");
const flash = require("connect-flash");
const customMiddleware = require("./src/config/middleware");

// ...........EJS .................
app.use(expresslayouts);
app.use(express.static("./src/assets"));
app.set("view engine", "ejs");
app.set("views", "./src/views");
app.set("layout extractStyles", true);
app.set("layout extractScript", true);

// middelware
app.use(express.urlencoded());

// sessions
app.use(
  session({
    name: "habit_tracker",
    secret: "sandeep",
    saveUninitialized: false,
    resave: false,
    cookie: {
      maxAge: 1000 * 60 * 100,
    },
  })
);

// use passport
app.use(passport.initialize());
app.use(passport.session());
app.use(passport.setAuthenticatedUser);
app.use(flash());
app.use(customMiddleware.setflash);

app.use("/", require("./src/routes"));

app.listen(PORT, () => {
  console.log("The app is running on  ", PORT);
});
