var express = require('express');
var app = express();
var path = require('path');
var port = process.env.PORT || 8080;
var router = express.Router();

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
		res.sendFile('/views/index.html');
});

app.route('/about')
	.get(function(req, res) {
		res.send('what about me');
});

app.route('/login')
	.get(function(req, res) {
		res.send('this is the login form');
});

app.use('/', router);

app.listen(port, function () {
	console.log('Example app listening on port %s', port);
});
