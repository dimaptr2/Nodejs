const PORT = 9081;
const GLPATH = '/usr/local/lib/node_modules';
var path = require('path');
var express = require('express');
var bodyParser = require('body-parser');
var sqlite3 = require(path.join(GLPATH, 'sqlite3'));

var server = express();
server.use(bodyParser.json());
server.use(bodyParser.urlencoded({ extended: true }));

// CRUD operations in the POST methods
// create an employee
server.post('/create', function(req, res) {
    var keys = ["firstName", "lastName", "secondName"];
    var answer = JSON.stringify(req.body, keys);
    var json = JSON.parse(answer);
    res.send(json["firstName"] + "\r\n");
    res.end();
});

// search an employee
server.post('/read', function(req, res) {

});

// Change an employee
server.post('/update', function(req, res) {

});

// Delete an employee
server.post('/delete', function(req, res) {

});

// Main section: here is a starting method
console.log('Start REST server on port 9081');
server.listen(PORT);