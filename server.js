const express = require('express')
const app = express()
const https = require('https');
// var Save = require('./AsyncStorage');
const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/mosaic');
let db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error'));
db.once('open', () => console.log('connected'));

let tokenSchema = mongoose.Schema({
  token: String
});
let Token = mongoose.model('Token', tokenSchema);


// console.log(Native.AsyncStorage) 
app.get('/', function (req, res) {
  res.send('Hello World!')
})

app.get('/oauth2/callback', function (req, res) {
  console.log(res);
  res.send('callback url has been hit');
  Token.create({token: res}, (err, tokenData) => {
    if (err) {console.error(err)}
    console.log(tokenData);
  })
  // asyncStorage.setItem('tokenInfo', 123);
})

app.listen(3000, function () {
  console.log('Example app listening on port 3000!')
})


// var options = {
//   "method": "GET",
//   "hostname": "api.npr.org",
//   "port": null,
//   "path": "/identity/v2/user?access_token=ac70c6f9f54d7cfce3c76c5b1cc93a53fe98de22459265c5e97a32d8d46db02220e12c4bb701ee3d",
//   "headers": {
//     "authorization": "Bearer ac70c6f9f54d7cfce3c76c5b1cc93a53fe98de22459265c5e97a32d8d46db02220e12c4bb701ee3d",
//     "cache-control": "no-cache",
//     "postman-token": "41600385-26df-cd4e-5a26-eb71c0efd6c4"
//   }
// };

// var req = https.request(options, function (res) {
//   var chunks = [];

//   res.on("data", function (chunk) {
//     chunks.push(chunk);
//   });

//   res.on("end", function () {
//     var body = Buffer.concat(chunks);
//     console.log(body.toString());
//   });
// });

// req.end();

// let lateTokenAllScopes = {
//   "token_type": "Bearer",
//   "expires_in": 1209600,
//   "access_token": "6e60374c0eb0a12d8da98322feb330b9507e6de56a61469017c938142b199c4dfe3c86e125df257a",
//   "refresh_token": "289ea27d4a1ad875ad0c49d23322097da697db7de35719d4627e8462fd1977caf356be3d08822734"
// }