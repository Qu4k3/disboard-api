'use strict'

var express = require('express');
var bodyParser = require('body-parser');

var app = express();
app.disable('x-powered-by');

// load routes
var team_routes = require('./routes/team');
var player_routes = require('./routes/player');
var war_routes = require('./routes/war');
var discord_routes = require('./routes/discord');

// body-parser
app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());

// CORS settings

// Add headers
app.use(function (req, res, next) {  
  // Website you wish to allow to connect
  /*var allowedOrigins = ['https://dev.disboard.team', 'https://disboard.team', 'http://localhost:3800', 'http://127.0.0.1:5500'];
  var origin = req.headers.origin;
  if(allowedOrigins.indexOf(origin) > -1){
    res.setHeader('Access-Control-Allow-Origin', origin);
  }*/
  res.setHeader('Access-Control-Allow-Origin', '*');
  // Request methods you wish to allow
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE'); // GET, POST, OPTIONS, PUT, PATCH, DELETE
  // Request headers you wish to allow
  res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
  // Set to true if you need the website to include cookies in the requests sent
  // to the API (e.g. in case you use sessions)
  res.setHeader('Access-Control-Allow-Credentials', true);
  // Pass to next layer of middleware
  next();
});

// routes
app.use('', team_routes);
app.use('', player_routes);
app.use('', war_routes);
app.use('/discord', discord_routes);

app.get('/', function (req, res) {
  res.sendFile(__dirname + '/views/index.html');
});

app.use((err, req, res, next) => {
  switch (err.message) {
    case 'NoCodeProvided':
      return res.status(400).send({
        status: 'ERROR',
        error: err.message,
      });
    default:
      return res.status(500).send({
        status: 'ERROR',
        error: err.message,
      });
  }
});

module.exports = app;