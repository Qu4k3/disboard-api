'use strict'

var express = require('express');
var TeamController = require('../controllers/team');

var api = express.Router();

api.post('/team', TeamController.saveTeam);
api.get('/teams', TeamController.getTeams);
api.get('/team/:id', TeamController.getTeam);
api.put('/team/:id', TeamController.updateTeam);
api.delete('/team/:id', TeamController.deleteTeam);

module.exports = api;