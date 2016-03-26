var http = require ('http');

// creates server using the callback. request is the incoming request stream and response is the outgoing steam
var server = http.createServer(function(request,response){
	console.log('request starting...');

	// respond
	response.write('hello client');
	response.end();
});

// port number that the server listens on
server.listen(3000);

console.log("server running at localhost 3000");

