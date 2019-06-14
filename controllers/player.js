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
    var playerId = req.params.id;
    var searchBy;

    if (playerId.length < 8 || playerId.length > 8 && playerId.length < 18 || playerId.length.length > 18) {
        res.status(500).send({
            message: 'Incorrect ID format'
        })
    } else {
        if (playerId.length == 8) {
            searchBy = {'player_id': playerId};
        } else {
            searchBy = {'discord.unique_id': playerId};
        }    

        Player.findOne(searchBy, {'_id': 0}).exec((err, player) => {
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
    
}

module.exports = {
    getPlayers,
    getPlayer
}