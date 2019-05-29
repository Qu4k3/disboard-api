'use strict'

var express = require('express');
var PlayerController = require('../controllers/player');

var api = express.Router();

api.get('/players', PlayerController.getPlayers);
api.get('/players/:id', PlayerController.getPlayer);

module.exports = api;