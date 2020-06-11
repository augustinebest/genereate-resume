const router = require('express').Router()
const ejs = require('../utils/ejs');
const pdf = require('../utils/pdf');

router.get('/select', (req, res) => {
    // if(req.user === 'undefined' || req.user === undefined) res.redirect('/auth/google')
    // else {
    //     const user = {
    //         name: req.user.name.split(" ")[0],
    //         email: req.user.email,
    //         image: req.user.image
    //     }
        res.render('select')
    // }
})

router.get('/editor', (req, res) => {
    // if(req.user === 'undefined' || req.user === undefined) res.redirect('/auth/google')
    // else {
        // const user = {
        //     name: req.user.name || 'Best',
        //     email: req.user.email || 'best@g.com',
        //     image: req.user.image || 'fjfjfjfj.jpg'
        // }
        res.render('editor')
    // }
})

module.exports = router;