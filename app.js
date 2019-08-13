var express = require('express');
var app = express();
var client_id = 'Whd1tzKCIU5K6E9dwXsq';
var client_secret = 'kdDvm3iDhs';

app.get('/ajax6.html',function(req,res){
    res.sendFile(__dirname + '/ajax6.html')
});

app.get('/search', function (req, res) {
   var api_url = 'https://openapi.naver.com/v1/search/movie.json?query=' + encodeURI(req.query.query); // json 결과
//   var api_url = 'https://openapi.naver.com/v1/search/blog.xml?query=' + encodeURI(req.query.query); // xml 결과
   var request = require('request');
   var options = {
       url: api_url,
       headers: {'X-Naver-Client-Id':client_id, 'X-Naver-Client-Secret': client_secret}
    };
   request.get(options, function (error, response, body) {
     if (!error && response.statusCode == 200) {
       res.writeHead(200, {'Content-Type': 'text/json;charset=utf-8'});
       res.end(body);
     } else {
       res.status(response.statusCode).end();
       console.log('error = ' + response.statusCode);
     }
   });
 });
 app.listen(3000, function () {
   console.log('http://127.0.0.1:3000/search/blog?query=�??�어 app listening on port 3000!');
 });