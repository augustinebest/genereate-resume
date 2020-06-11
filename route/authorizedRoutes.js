const router = require('express').Router()

router.get('/select', (req, res) => {
    if(req.user === 'undefined' || req.user === undefined) res.redirect('/auth/google')
    else {
        console.log('select routr: ', req.user.name.split(" ")[0])
        const user = {
            name: req.user.name,
            email: req.user.email,
            image: req.user.image
        }
        res.render('select', {user})
    }
})

router.get('/editor', (req, res) => {
    if(req.user === 'undefined' || req.user === undefined) res.redirect('/auth/google')
    else {
        console.log('editor route, nawa o: ',req.user.name.split(" ")[0])
        const user = {
            name: req.user.name,
            email: req.user.email,
            image: req.user.image
        }
        res.render('editor', {user})
    }
})

router.post('/generate', (req, res) => {
    console.log(req.body)
})

module.exports = router;