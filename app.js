'use strict'

var express = require('express');
var bodyParser = require('body-parser');

var app = express();
app.disable('x-powered-by');

// load routes
var team_routes = require('./routes/team');
var player_routes = require('./routes/player');

// body-parser
app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());

// CORS settings

// routes
app.use('/api', team_routes);
app.use('/api', player_routes);

module.exports = app;