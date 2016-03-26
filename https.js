var https = require('https');
var fs = require('fs');

var options = {
    key: fs.readFileSync('./key.pem'),
    cert: fs.readFileSync('./cert.pem')
};

// handles requests, but has a optional "options" object for adding private and public keys 
https.createServer(options, function (req, res) { res.end('hello client!');
}).listen(3000);