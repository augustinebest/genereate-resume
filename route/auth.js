const router = require('express').Router()
const passport = require('passport');

router.get('/auth/google', passport.authenticate("google", {
    scope: ["profile", "https://www.googleapis.com/auth/drive.file", "email"]
  }))

router.get('/auth/google/callback', 
passport.authenticate('google', { failureRedirect: '/error' }),
(req, res) => {
    console.log('route: ', req.user)
    req.auth = {
        name: req.user.name,
        email: req.user.email,
        image: req.user.image
    }
    res.redirect('/editor')
})

module.exports = router;