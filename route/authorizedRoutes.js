const router = require('express').Router();

router.get('/select', (req, res) => {
    if(req.user === 'undefined' || req.user === undefined) res.redirect('/auth/google')
    else {
        const user = {
            name: req.user.name.split(" ")[0],
            email: req.user.email,
            image: req.user.image
        }
        res.render('select', {user})
    }
    res.render('select')
})

router.get('/editor', (req, res) => {
    if(req.user === 'undefined' || req.user === undefined) res.redirect('/auth/google')
    else {
        const user = {
            name: req.user.name,
            email: req.user.email,
            image: req.user.image
        }
        res.render('editor', {user})
    }
})

module.exports = router;