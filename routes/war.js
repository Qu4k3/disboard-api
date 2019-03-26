'use strict'

var express = require('express');
var WarController = require('../controllers/war');

var api = express.Router();

//api.post('/war', WarController.saveWar);
api.get('/wars', WarController.getWars);
//api.get('/war/:id', WarController.getWar);
//api.put('/war/:id', WarController.updateWar);
//api.delete('/war/:id', WarController.deleteWar);

module.exports = api;