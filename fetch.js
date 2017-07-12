var fetch = require('node-fetch');

let myInit = {
        "method": "GET",
        "credentials": 'include',
        "Accept": "application/json",
        "headers": {
          "authorization": "Bearer 6e60374c0eb0a12d8da98322feb330b9507e6de56a61469017c938142b199c4dfe3c86e125df257a",
        },
        "mode": "cors"
}; 

fetch('https://api.npr.org/listening/v2/recommendations', myInit)
.then((res) => res.json())
.then((json) => console.log(json));

// var request = require("request");

// var options = { method: 'GET',
//   url: 'https://api.npr.org/listening/v2/recommendations',
//   headers: 
//    { 'postman-token': '468b4197-1985-d38a-3f63-368f87335550',
//      'cache-control': 'no-cache',
//      authorization: 'Bearer a993f5394c6ceeee418c812dbb08651ae093a80c1190a6150243f72173d45133ac47932c7dd91841' } };

// request(options, function (error, response, body) {
//   if (error) throw new Error(error);

//   console.log(body);
// });