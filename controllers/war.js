'use strict'

var War = require('../models/war');

function saveWar(req, res) {
    var war = new War();

    var params = req.body;

    if(params.results){

        war.save(params, (err, warStored) => {
            if(err){
                res.status(500).send({
                    message: 'Server error'
                })
            } else {
                if (warStored) {
                    res.status(200).send({
                        war: warStored
                    })
                } else {
                    res.status(200).send({
                        message: 'War not added'
                    })
                }
            }
        });
    } else {
        res.status(200).send({
            message: '*results* is a required fields'
        })
    }
}

function getWars(req, res){
    War.find({}, {'_id': 0, '__v' : 0}).exec((err, wars) => {
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

    War.findById(warId, {'_id': 0, '__v' : 0}).exec((err, war) => {
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

function updateWar(req, res){
    var warId = req.params.id;
    var update = req.body;

    War.findOneAndUpdate({'war_id': warId}, update, {new:true}, (err, warUpdated) => {
        if(err) {
            res.status(500).send({
                message: 'Server error'
            })
        } else {
            if(warUpdated){
                res.status(200).send({
                    status: 200,
                    war: warUpdated
                });
            } else {
                res.status(404).send({
                    message: 'War not found'
                });
            }
        }
    });
}

function deleteWar(req, res) {
    var warId = req.params.id;

    War.findOneAndRemove({'war_id': warId}, (err, warRemoved) => {
        if(err) {
            res.status(500).send({
                message: 'Server error'
            })
        } else {
            if(warRemoved){
                res.status(200).send({
                    war: warRemoved
                });
            } else {
                res.status(404).send({
                    message: 'War not found'
                });
            }
        }
    })
}

module.exports = {
    saveWar,
    getWars,
    getWar,
    updateWar,
    deleteWar
}