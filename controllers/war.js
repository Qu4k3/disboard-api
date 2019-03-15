'use strict'

var War = require('../models/war');

function getWars(req, res){
    War.find({}, {'_id': 0}).exec((err, wars) => {
        if(err) {
            res.status(500).send({
                message: 'Server error'
            })
        } else {
            if(wars){
                res.status(200).send({
                    wars
                });
            } else {
                res.status(404).send({
                    message: 'Wars not found'
                })
            }
        }
    });
}

function getWar(req, res){
    var warId = req.params.id;

    War.findOne({'discord.unique_id': warId}, {'_id': 0}).exec((err, war) => {
        if(err) {
            res.status(500).send({
                message: 'Server error'
            })
        } else {
            if(war){
                res.status(200).send({
                    war
                });
            } else {
                res.status(404).send({
                    message: 'War not found'
                })
            }
        }
    });
}

module.exports = {
    getWars,
    getWar
}