var express = require('express');
var fs = require('fs');

var app = express.createServer(express.logger());

app.get('/', function(request, response) {
	fs.readFile('./index.html',
		function(err, data) {
			var buf = new Buffer(data);
			console.log("Read data " + data);
			console.log("Read buffer " + buf.toString());

			response.send(buf.toString());
		});
});

function writeResponse(data) {
	response.send(data);
}

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
