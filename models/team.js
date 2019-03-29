'use strict'

var mongoose = require('mongoose');
const shortid = require('shortid');
var Schema = mongoose.Schema;

var TeamSchema = Schema({
    team_id: {
        'type': String,
        'default': shortid.generate
    },
    team_name: String,
    team_tag: String,
    team_logo: String,
    mkc_team_profile: String
});

module.exports = mongoose.model('Team', TeamSchema);