'use strict'

var Player = require('../models/player');

function getPlayers(req, res){
    Player.find({}, {'_id': 0}).exec((err, players) => {
        if(err) {
            res.status(500).send({
                message: 'Server error'
            })
        } else {
            if(players){
                res.status(200).send({
                    players
                });
            } else {
                res.status(404).send({
                    message: 'Players not found'
                })
            }
        }
    });
}

function getPlayer(req, res){
    var playerDiscordId = req.params.id;

    Player.findOne({'discord.unique_id': playerDiscordId}, {'_id': 0}).exec((err, player) => {
        if(err) {
            res.status(500).send({
                message: 'Server error'
            })
        } else {
            if(player){
                res.status(200).send({
                    player
                });
            } else {
                res.status(404).send({
                    message: 'Player not found'
                })
            }
        }
    });
}

module.exports = {
    getPlayers,
    getPlayer
}