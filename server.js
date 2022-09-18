const express = require('express')
const path = require('path')
const app = express()

//using public folder
app.use(express.static(__dirname + '/public'))

const views = path.join(__dirname, '/public/views/')

app.get('/', function (req, res) {
  res.sendFile(render('index.html'))
})

// functions
function render(view) {
  let directory = path.join(views, view)
  return directory
}

//defining port
const PORT = process.env.PORT || 3000
app.listen(PORT, () => {
  console.log(`app is live at localhost:${PORT}`)
})
