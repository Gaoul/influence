var io = require ('socket.io'); //useless at the moment

var express = require('express');
var app = express();

var http = require('http').Server(app);

app.get('/', function(req, res){
	// __dirname is like __FILE__ in php
	res.sendFile(__dirname + '/index.html');
});

http.listen(3000, function(){
	console.log('listen on *:3000');
});