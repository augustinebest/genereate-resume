const express = require('express');
require('dotenv').config();
const app = express();
const PORT = process.env.PORT || 8080;
const bodyparser = require('body-parser');
const path = require('path');
const passport = require('passport');
const authRoute = require('./route/auth');
const authorizedRoutes = require('./route/authorizedRoutes');
const GoogleStrategy = require('./service/authService');
const cookieSession = require('cookie-session');
const { template1, template2 } = require('./utils/templates');
const hbs = require('hbs');
const fs = require("fs");
const pdf = require('html-pdf')

//setting view engine 
app.set('view engine', 'hbs')

// Middleware
app.use(bodyparser.urlencoded({ extended: true }));
app.use(bodyparser.json());
app.use(express.json());//for parsing application/json
app.use(express.urlencoded({ extended: false })); //for parsing application/x-www-form-urlencoded

passport.use(GoogleStrategy);
app.use(cookieSession({
    keys: [process.env.secret]
}))

// init passport
app.use(passport.initialize());
app.use(passport.session());

app.get('/', (req, res) => {
    res.render('landing.hbs')
})

// Using static files
app.use(express.static(__dirname + '/public'));
app.use(express.static(__dirname + '/output'));
app.set('views', path.join(__dirname, 'views'))

// Auth Login
app.use('/', authRoute);
app.use('', authorizedRoutes)

app.post('/generatepdf', (req, res) => {
    const data = req.body;
    console.log(data)
    const readTemp = data.template == 1 ? './templates/temp1.hbs' : './templates/temp2.hbs';
    const webpage = data.template == 1 ? template1(data) : template2(data);
    const options = { format: "A4" };
    const template = hbs.compile(fs.readFileSync(readTemp, "utf8"));
    const html = template({ content: webpage });
    const filename = `${data.firstname}-${data.lastname}`;
    pdf.create(html, options)
        .toFile(`./output/${filename}.pdf`, function (err, response) {
            // console.log('pdf generated successfully', response)
            if (response) return res.json({ filename: filename + ".pdf" })
            if (err) return console.log(err);
            console.log(res)
        })
})

app.post('/googleUpload', (req, res) => {
    if (!req.user || req.user === 'undefined' || req.user === undefined) res.redirect("/auth/login/google"); //checking if the user is authenticated
    const data = req.body;
    console.log(data)
    const readTemp = data.template == 1 ? './templates/temp1.hbs' : './templates/temp2.hbs';
    const webpage = data.template == 1 ? template1(data) : template2(data);
    const options = { format: "A4" };
    const template = hbs.compile(fs.readFileSync(readTemp, "utf8"));
    const html = template({ content: webpage });
    const filename = `${data.firstname}-${data.lastname}`;
    pdf.create(html, options)
        .toFile(`./output/${filename}.pdf`, function (err, response) {
            console.log('access token: ', req.user.accessToken)
            const oauth2Client = new google.auth.OAuth2();
            oauth2Client.setCredentials({
                access_token: req.user.accessToken
            })
            const drive = google.drive({
                version: "v3",
                auth: oauth2Client
            });
            const checkResponse = drive.files.create({
                requestBody: {
                    name: `${filename}.pdf`,
                    mimeType: "application/pdf"
                },
                media: {
                  mimeType: "application/pdf",
                  body: fs.createReadStream(`./output/${filename}.pdf`)
                }
            })
            checkResponse.then(data => {
                if(data.status == 200) {
                    console.log('uploaded successfully')
                    res.json('uploaded successfully')
                } else {
                    console.log('error ocurred');
                    res.json("error ocurred")
                }
            })
            .catch(err => console.log(err))
        })
})

app.listen(PORT, () => {
    console.log(`app running on PORT: ${PORT}`)
})