var http = require("http");
var fs = require("fs");

// 404 response

function send404Response(response){
	response.writeHead(404,{"Content-Type":"text/plain"});
	response.write("404 page not found");
	response.end();

}


// create server. param is the request listener. This will be the code run every time the user tries to connect to the server.
// also the server must be listening for a request for the client to connect to the server 


// request - what the user request consists of
// response - what the server sends back

// we want to send back the html file. Handle request
function onRequest(request,response){

	if(request.method === 'GET' && request.url === '/'){
		response.writeHead(200,{"Content-Type":"text/html"});
		fs.createReadStream("./index.html").pipe(response); 
	}else{
		send404Response(response);
	}

}

// SO EVERYTIME user tries to connect to server, call the onRequest function. It passes in 2 params, the request object and the response object.
http.createServer(onRequest).listen(8888);
console.log("server is now running");
