'use strict'

var express = require('express');
var WarController = require('../controllers/war');

var api = express.Router();

api.post('/wars', WarController.saveWar);
api.get('/wars', WarController.getWars);
api.get('/wars/:id', WarController.getWar);
api.put('/wars/:id', WarController.updateWar);
api.delete('/wars/:id', WarController.deleteWar);

module.exports = api;