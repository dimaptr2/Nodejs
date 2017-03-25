var path = require('path');
var express = require('express');
var app = express();
const PORT = 8080;

app.use(express.static(path.join(__dirname, 'public')));
console.log("Start Node Server on the port: " + PORT);
app.listen(PORT);