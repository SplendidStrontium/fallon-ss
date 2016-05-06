var express = require('express');
var path = require('path');
var app = express();

app.set('views', __dirname + '/public/views');
app.set('view engine', 'ejs');

app.get('/', function (req, res) {
	res.sendFile(__dirname + '/public/views/index.html');
});

app.listen(3000, function () {
	console.log('Example app listening on port 3000');
});
