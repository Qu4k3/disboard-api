'use strict'

var mongoose = require('mongoose');
const generate = require('nanoid/generate');
const config = require('./../config.json');
var Schema = mongoose.Schema;

mongoose.set('useCreateIndex', true);

var WarSchema = Schema({
    war_id: {
        type: String,
        default: () => generate(config.nanoid.alphabet, config.nanoid.id_length),
        unique: true
    },
    played_at: Date,
    game: {
        name: String,
        mode: String
    },
    type: String,
    tags: Array,
    results: [{
        team: String,
        host: Boolean,
        score: Number,
        penality: Number,
        players: [{
            player: String,
            score: Number
        }]
    }]
});

module.exports = mongoose.model('War', WarSchema);