const express = require('express')
const app = express()
const https = require('https');

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