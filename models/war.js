'use strict'

var mongoose = require('mongoose');
const generate = require('nanoid/generate');
const config = require('./../config.json');
var Schema = mongoose.Schema;

mongoose.set('useCreateIndex', true);

var dateYMD = new Date().toISOString().split('T')[0];

var WarSchema = Schema({
    war_id: {
        type: String,
        default: () => generate(config.nanoid.alphabet, config.nanoid.id_length),
        unique: true
    },
    played_at: {
        type: Date,
        default: dateYMD // Date.now
    },
    game: {
        name: {
            type: String,
            default: "MK8D"
        },
        mode: {
            type: String,
            default: "150cc"
        }
    },
    type: {
        type: String,
        default: "friendly"
    },
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