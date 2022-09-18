const express = require('express')
const path = require('path')
const app = express()
const cors = require('cors')
const login = require('./routes/login')
const student = require('./routes/api/student')
const index = require('./routes/index')

//cors policy
app.use(cors())
//static files like views, css, javascript
app.use(express.static(__dirname + '/public/'))

//view routes
app.use(index)
app.use(login)

//api routes
app.use('/api/student', student)

//defining port
const PORT = process.env.PORT || 3000
app.listen(PORT, () => {
  console.log(`app is live at localhost:${PORT}`)
})
