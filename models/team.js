'use strict'

var mongoose = require('mongoose');
const generate = require('nanoid/generate');
const config = require('./../config.json');
var Schema = mongoose.Schema;

mongoose.set('useCreateIndex', true)

var TeamSchema = Schema({
    team_id: {
        type: String,
        default: () => generate(config.nanoid.alphabet, config.nanoid.id_length),
        unique: true
    },
    team_name: String,
    team_tag: String,
    team_logo: String,
    mkc_team_profile: String
});

module.exports = mongoose.model('Team', TeamSchema);