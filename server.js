const express = require('express')
const app = express()

//using public folder
app.use(express.static(__dirname + '/public'))
//setting view engine
app.set('view-engine', 'ejs')
app.set('views', 'public/views')

app.get('/', function (req, res) {
  res.render('index.ejs')
})

//defining port
const PORT = process.env.PORT || 3000
app.listen(PORT, () => {
  console.log(`app is live at localhost:${PORT}`)
})
