var express = require('express');
var app = express();

app.get ('/', function (req, res) {
	res.sendFile (__dirname + "/hw5.html");
});

app.get ('/change', function (req, res) {
	let name = req.query.name;
	console.log (name + ' is on ...') 
	res.sendFile (__dirname + '/hw5.html');
});
//app.exec('main.exe');
app.listen (3000, function () {
	console.log ('server started on port 3000');
	}) ;

