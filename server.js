const express = require('express')

const app = express()

//using public folder
app.use(express.static(__dirname + '/public'))

app.get('/', function (req, res) {
  res.sendFile('/views/index.html')
})

//defining port
const PORT = process.env.PORT || 3000
app.listen(PORT, () => {
  console.log(`app is live at localhost:${PORT}`)
})
