'use strict'

var express = require('express');
var bodyParser = require('body-parser');

var app = express();
app.disable('x-powered-by');

// load routes
var team_routes = require('./routes/team');
var player_routes = require('./routes/player');
var discord_routes = require('./routes/discord');

// body-parser
app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());

// CORS settings

// routes
app.use('', team_routes);
app.use('', player_routes);
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