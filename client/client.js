const express = require('express')
const path = require('path')
const app = express()

//using client folder
app.use(express.static(__dirname))

const views = path.join(__dirname, '/views/')

//view request
app.get('/', function (req, res) {
  res.sendFile(render('login.html'))
})

//view functions
function render(view) {
  let directory = path.join(views, view)
  return directory
}

//defining port
const PORT = process.env.PORT || 3001
app.listen(PORT, () => {
  console.log(`app is live at localhost:${PORT}`)
})
