const express = require('express')
const path = require('path')
const app = express()
const cors = require('cors')

app.use(
  cors({
    origin: ['http://localhost:3000/', 'https://thesis-ten.vercel.app/'],
  })
)

//using public folder
app.use(express.static(__dirname + '/public'))

const views = path.join(__dirname, '/public/views/')

app.get('/', function (req, res) {
  res.sendFile(render('index.html'))
})

app.get('/api/get', function (req, res) {
  res.send({ data: 'Ermel' })
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
