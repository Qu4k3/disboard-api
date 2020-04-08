'use strict'

var Team = require('../models/team');

function saveTeam(req, res) {
    var team = new Team();

    var params = req.body;

    if(params.name && params.tag){
        team.team_name = params.name;
        team.team_tag = params.tag;
        team.team_logo = params.logo;
        team.mkc_team_profile = params.mkc_profile;

        team.save((err, teamStored) => {
            if(err){
                res.status(500).send({
                    message: 'Server error'
                })
            } else {
                if (teamStored) {
                    res.status(200).send({
                        team: teamStored
                    })
                } else {
                    res.status(200).send({
                        message: 'Team not added'
                    })
                }
            }
        });
    } else {
        res.status(200).send({
            message: '*name* and *tag* are required fields'
        })
    }
}

function getTeams(req, res){
    Team.find({}, {'_id': 0, '__v' : 0}).exec((err, teams) => {
        if(err) {
            res.status(500).send({
                message: 'Server error'
            })
        } else {
            if(teams){
                res.status(200).send({
                    teams
                });
            } else {
                res.status(404).send({
                    message: 'Teams not found'
                })
            }
        }
    });
}

function getTeam(req, res){
    var teamId = req.params.id;

    Team.findOne({'team_id': teamId}, {'_id': 0, '__v' : 0}).exec((err, team) => {
        if(err) {
            res.status(500).send({
                message: 'Server error'
            })
        } else {
            if(team){
                res.status(200).send({
                    team
                });
            } else {
                res.status(404).send({
                    message: 'Team not found'
                })
            }
        }
    });
}

function updateTeam(req, res){
    var teamId = req.params.id;
    var update = req.body;

    Team.findOneAndUpdate({'team_id': teamId}, update, {new:true}, (err, teamUpdated) => {
        if(err) {
            res.status(500).send({
                message: 'Server error'
            })
        } else {
            if(teamUpdated){
                res.status(200).send({
                    status: 200,
                    team: teamUpdated
                });
            } else {
                res.status(404).send({
                    message: 'Team not found'
                });
            }
        }
    });
}

function deleteTeam(req, res) {
    var teamId = req.params.id;

    Team.findOneAndRemove({'team_id': teamId}, (err, teamRemoved) => {
        if(err) {
            res.status(500).send({
                message: 'Server error'
            })
        } else {
            if(teamRemoved){
                res.status(200).send({
                    team: teamRemoved
                });
            } else {
                res.status(404).send({
                    message: 'Team not found'
                });
            }
        }
    })
}

module.exports = {
    saveTeam,
    getTeams,
    getTeam,
    updateTeam,
    deleteTeam
}