const router = require('express').Router()

router.get('/select', (req, res) => {
    console.log('select routr: ', req.user)
    res.render('select')
})

router.get('/editor', (req, res) => {
    console.log('editor route, nawa o: ',req.user)
    res.render('editor')
})

router.post('/generate', (req, res) => {
    console.log(req.body)
})

module.exports = router;