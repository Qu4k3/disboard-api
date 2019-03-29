'use strict'

var mongoose = require('mongoose');
const shortid = require('shortid');
var Schema = mongoose.Schema;

var WarSchema = Schema({
    war_id: {
        'type': String,
        'default': shortid.generate
    },
    played_at: Date,
    game: {name: String, mode: String},
    type: String,
    tags: Array,
    home_team: {team: String, score: Number, penality: Number, players: [{player: String, score: Number}]},
    away_team: {team: String, score: Number, penality: Number, players: [{player: String, score: Number}]}
});

module.exports = mongoose.model('War', WarSchema);