const express = require('express');
require('dotenv').config();
const app = express();
const PORT = process.env.PORT || 8080;
const ejs = require('./utils/ejs');
const pdf = require('./utils/pdf');
const bodyparser = require('body-parser');
const path = require('path');
const passport = require('passport');
const authRoute = require('./route/auth');
const GoogleStrategy = require('./service/authService');
const cookieSession = require('cookie-session');

// set the view engine to ejs
app.set('view engine', 'ejs');

// Middleware
app.use(bodyparser.urlencoded({ extended: true }));
app.use(bodyparser.json());
app.use(express.json());//for parsing application/json
app.use(express.urlencoded({ extended: false })); //for parsing application/x-www-form-urlencoded

// init passport
app.use(passport.initialize());
app.use(passport.session());

passport.use(GoogleStrategy);
app.use(cookieSession({
    keys: [process.env.secret]
}))

app.get('/', (req, res) => {
    res.render('app')
})
app.get('/editor', (req, res) => {
    console.log('jdjd',req.auth)
    res.render('editor')
})

// Using static files
app.use(express.static(__dirname + '/public'));
app.set('views', path.join(__dirname, 'views'))

// Auth Login
app.use('/', authRoute);

app.listen(PORT, () => {
    console.log(`app running on PORT: ${PORT}`)
})