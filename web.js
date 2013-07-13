var express = require('express');
var fs = require('fs');
var buf = new Buffer(256);	
buf.write(fs.readFileSync('./index.html', 'utf-8'));

var app = express.createServer(express.logger());

app.get('/', function(request, response) {
  response.send(uf.toString());
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
