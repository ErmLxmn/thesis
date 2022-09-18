const express = require('express')
const router = express.Router()
const render = require('./views')

router.get('/', function (req, res) {
  res.sendFile(render('login.html'))
})

router.get('/login', function (req, res) {
  res.sendFile(render('login.html'))
})

module.exports = router
