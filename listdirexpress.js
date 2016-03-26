var express = require('express');
var serveIndex = require('serve-index');
var app = express() .use(serveIndex(__dirname + '/public')) .listen(3000);