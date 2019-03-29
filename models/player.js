'use strict'

var mongoose = require('mongoose');
const shortid = require('shortid');
var Schema = mongoose.Schema;

var PlayerSchema = Schema({
    player_id: {
        type: String,
        default: shortid.generate
    },
    player_name: String,
    player_team: String,
    country: {name: String, code: String},
    player_registry: [{role: String, in: Date, out: Date}],
    discord: {unique_id: String, user_tag: String, avatar_url: String,roles:[{role: String, role_color: String}]},
    switch_fc: String,
    mkc_player_profile: String
});

module.exports = mongoose.model('Player', PlayerSchema);