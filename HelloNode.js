var htpp = require('http');

var server = http.createServer(function ( request, response){
	response.writeHead(200, {"Content-Type": "text/plain"});
	response.end("Welcome node.js to ISYS 475. Just the Beginning!\n");
});

server.listen(8000);

console.log("Server running at http://127.0.0.1:8000/");