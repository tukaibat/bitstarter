var express = require('express');
var fs = require('fs');
var buf = new Buffer(256);	
var fileLength = buf.write(fs.readFileSync('./index.html', 'utf-8'));

var app = express.createServer(express.logger());

app.get('/', function(request, response) {
  response.send(buf.toString(), 0, fileLength);
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
