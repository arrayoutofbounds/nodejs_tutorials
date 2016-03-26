var http = require("http");

// create server. param is the request listener. This will be the code run every time the user tries to connect to the server.
// also the server must be listening for a request for the client to connect to the server 


// request - what the user request consists of
// response - what the server sends back
function onRequest(request,response){
	console.log("A user made a request " + request.url);

	// then build the response
	response.writeHead(200,{"Context-Type":"text/plain"}); // this sends the headers only 
	response.write("here is some data");
	response.end(); // response ends. Response is ACTUALLY SENT
}

// SO EVERYTIME user tries to connect to server, call the onRequest function. It passes in 2 params, the request object and the response object.
http.createServer(onRequest).listen(8888);
console.log("server is now running");
