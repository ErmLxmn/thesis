const express = require('express')
const student = express.Router()

student.get('/get', function (req, res) {
  res.send({ name: 'ermel', age: 27 })
})

module.exports = student
