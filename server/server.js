const express = require('express')
const path = require('path')
const app = express()
const cors = require('cors')

app.use(cors())

app.get('/api/get', function (req, res) {
  res.send({ data: 'Ermel' })
})

//defining port
const PORT = process.env.PORT || 3000
app.listen(PORT, () => {
  console.log(`app is live at localhost:${PORT}`)
})
