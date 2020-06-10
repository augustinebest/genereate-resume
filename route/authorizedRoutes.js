const router = require('express').Router()

router.get('/editor', (req, res) => {
    console.log('editor route: ',req.user)
    res.render('editor')
})

router.post('/generate', (req, res) => {
    console.log(req.body)
})

module.exports = router;