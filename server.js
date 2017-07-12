const express = require('express')
const app = express()

app.get('/', function (req, res) {
  res.send('Hello World!')
})

app.get('/oauth2/callback', function (req, res) {
  console.log(res);
  res.send('callback url has been hit')
})

app.listen(3000, function () {
  console.log('Example app listening on port 3000!')
})