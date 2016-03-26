var connect = require('connect')
    , http = require('http');

// takes request and response args. This is called when deciding what to do with request url
// looks at this to decide how to respond to the request     
// Create a connect dispatcher
var app = connect();
// Register with http 
http.createServer(app).listen(3000);
console.log('server running on port 3000');

