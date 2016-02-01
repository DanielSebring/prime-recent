require('http');


var options = {
  host: 'http://www.amazon.com/Interstellar-Matthew-McConaughey/dp/B00TU9UFTS/ref=sr_1_1?ie=UTF8&qid=1454208297&sr=8-1&keywords=prime+video',
  port: 80,
  path: '/upload',
  method: 'GET'
};

var req = http.request(options, function(res) {
  console.log('STATUS: ' + res.statusCode);
  console.log('HEADERS: ' + JSON.stringify(res.headers));
  res.setEncoding('utf8');
  res.on('data', function (chunk) {
    console.log('BODY: ' + chunk);
  })
});