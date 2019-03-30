'use strict'

var mongoose = require('mongoose');
const generate = require('nanoid/generate');
const alphabet = '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
var Schema = mongoose.Schema;

var WarSchema = Schema({
    war_id: {
        'type': String,
        'default': () => generate(alphabet, 8)
    },
    played_at: Date,
    game: {name: String, mode: String},
    type: String,
    tags: Array,
    home_team: {team: String, score: Number, penality: Number, players: [{player: String, score: Number}]},
    away_team: {team: String, score: Number, penality: Number, players: [{player: String, score: Number}]}
});

module.exports = mongoose.model('War', WarSchema);