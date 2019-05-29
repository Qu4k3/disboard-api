'use strict'

var express = require('express');
var TeamController = require('../controllers/team');

var api = express.Router();

api.post('/teams', TeamController.saveTeam);
api.get('/teams', TeamController.getTeams);
api.get('/teams/:id', TeamController.getTeam);
api.put('/teams/:id', TeamController.updateTeam);
api.delete('/teams/:id', TeamController.deleteTeam);

module.exports = api;