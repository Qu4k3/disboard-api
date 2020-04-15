'use strict'

var express = require('express');
var PlayerController = require('../controllers/player');

var api = express.Router();

api.post('/players', PlayerController.savePlayer);
api.get('/players', PlayerController.getPlayers);
api.get('/players/:id', PlayerController.getPlayer);
api.put('/players/:id', PlayerController.updatePlayer);
api.delete('/players/:id', PlayerController.deletePlayer);

module.exports = api;