var express = require('express');
var app = express();
var mongoose = require('mongoose');
var morgan = require('morgan');
var bodyParser = require('body-parser');
var methodOverride = require('method-override');
var _ = require('lodash');

// config files
var db = require('./config/db');
mongoose.connect(db.url);

app.use(express.static(__dirname + '/public'));
app.use(morgan('dev'));
app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());
app.use(bodyParser.json({ type: 'application/vnd.api+json'}));
app.use(methodOverride('X-HTTP-Method-Override'));

// CORS Support
app.use(function(req, res, next) {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
  res.header('Access-Control-Allow-Headers', 'Content-Type');
  next();
});

mongoose.connection.once('open', function(){
	app.models = require('./app/models/index');

	var routes = require('./app/routes');

	app.get("/", function(req, res) {
		res.sendfile('./public/index.html');
	});
	_.each(routes, function(controller, route) {
		app.use(route, controller(app, route));
	});


	app.listen(8080);
	console.log('App running on port 8080');
});
