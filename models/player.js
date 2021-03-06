'use strict'

var mongoose = require('mongoose');
const generate = require('nanoid/generate');
const config = require('./../config.json');
var Schema = mongoose.Schema;

mongoose.set('useCreateIndex', true);

var PlayerSchema = Schema({
    player_id: {
        type: String,
        default: () => generate(config.nanoid.alphabet, config.nanoid.id_length),
        unique: true
    },
    player_name: String,
    player_team: String,
    country: {
        name: String,
        code: String
    },
    player_registry: [
        {
            role: String,
            in: Date,
            out: Date
        }
    ],
    discord: {
        unique_id: String,
        roles:[
            {
                role: { type: String, default: "Imanity" },
                role_color: { type: String, default: "#3498db" }
            }
        ]
    },
    switch_fc: String,
    mkc_player_profile: String,
    mkc_avatar_url: {
        type: String,
        default: "https://www.mariokartcentral.com/mkc/images/icons/profile_picture_default.png"
    }
});

module.exports = mongoose.model('Player', PlayerSchema);