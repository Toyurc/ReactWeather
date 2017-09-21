const express = require('express')

//
const app = express()
app.use(express.static('public'))
app.listen(5000, function () {
  console.log('Express is listening at localhost:5000')
})
