const express = require('express')
const index = express.Router()
const render = require('./views')

index.get('/', function (req, res) {
  res.sendFile(render('index.html'))
})

module.exports = index
