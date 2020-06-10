const express = require('express');
const app = express();
const PORT = process.env.PORT || 8080;
const ejs = require('./utils/ejs');
const pdf = require('./utils/pdf');
const bodyparser = require('body-parser');
const path = require('path');

// set the view engine to ejs
app.set('view engine', 'ejs');

// Middleware
app.use(bodyparser.urlencoded({ extended: true }));
app.use(bodyparser.json());
app.use(express.json());//for parsing application/json
app.use(express.urlencoded({ extended: false })); //for parsing application/x-www-form-urlencoded

app.get('/', (req, res) => {
    res.render('app')
})

// Using static files
app.use(express.static(__dirname + '/public'));
app.set('views', path.join(__dirname, 'views'))

app.listen(PORT, () => {
    console.log(`app running on PORT: ${PORT}`)
})