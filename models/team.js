'use strict'

var mongoose = require('mongoose');
const generate = require('nanoid/generate');
const alphabet = '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
var Schema = mongoose.Schema;

mongoose.set('useCreateIndex', true)

var TeamSchema = Schema({
    team_id: {
        type: String,
        default: () => generate(alphabet, 8),
        unique: true
    },
    team_name: String,
    team_tag: String,
    team_logo: String,
    mkc_team_profile: String
});

module.exports = mongoose.model('Team', TeamSchema);