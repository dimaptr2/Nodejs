const PORT = 8080;
const GLPATH = '/usr/local/lib/node_modules';

var path = require('path');
var express = require('express');

var app = express();

app.use(express.static(path.join(__dirname, 'public')));

console.log('Start Node Server on the port 8080');
app.listen(PORT);