var express = require('express');
var app = express();
var path = require('path');
var port = process.env.PORT || 8080;
var router = express.Router();
var jade = require('jade');

app.use(express.static(__dirname + '/public'));

// 
// ============================================

router.use(function(req, res, next) {
	console.log(req.method, req.url);
	next();
});

// ROUTES
// ==============================================

app.route('/')
	.get(function(req, res) {
		var html = jade.renderFile('./public/views/index.jade', {pretty: true});
		res.send(html);
});

app.route('/about')
	.get(function(req, res) {
		var html = jade.renderFile('./public/views/about.jade');
		res.send(html);
});

app.route('/login')
	.get(function(req, res) {
		var html = jade.renderFile('./public/views/login.jade');
		res.send(html);
});

app.use('/', router);

app.listen(port, function () {
	console.log('Example app listening on port %s', port);
});
