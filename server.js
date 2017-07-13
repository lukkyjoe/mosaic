const express = require('express')
const app = express()
const request = require('request');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const config = require('./config')

mongoose.connect('mongodb://localhost/mosaic');
let db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error'));
db.once('open', () => console.log('connected'));

let tokenSchema = mongoose.Schema({
  token: String
});
let Token = mongoose.model('Token', tokenSchema);

app.use(bodyParser.json())

app.get('/', function (req, res) {
  res.send('Hello World!')
})

app.get('/oauth2/callback', function (req, res) {
  console.log('req.query.code here ------------', req.query.code);
  res.send('callback url has been hit');
  let authCode = req.query.code.toString();
  request.post('https://api.npr.org/authorization/v2/token', {
    form: {
      grant_type: 'authorization_code',
      client_id: config.appID,
      client_secret: config.appSecret,
      code: authCode,
      redirect_uri: 'http://localhost:3000/oauth2/callback'
    },
    json: true
  }, (err, res, body) => {
      console.log('THIS SHOULD BE THE TOKEN BODY', body)
      Token.create({token: body.access_token}, (err, tokenData) => {
        if (err) {console.error(err)}
        console.log(tokenData);
      })
    });
  let aString = JSON.stringify(req.query);

  // asyncStorage.setItem('tokenInfo', 123);
})

app.listen(3000, function () {
  console.log('Mosaic NPR takehome app listening on port 3000!')
})
