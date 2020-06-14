'use strict'

const express = require('express');
const fetch = require('node-fetch');
const btoa = require('btoa');
const {catchAsync} = require('../utils');
require('dotenv').config();

const CLIENT_ID = process.env.CLIENT_ID;
const CLIENT_SECRET = process.env.CLIENT_SECRET;
const redirect = encodeURIComponent('https://api.disboard.team/discord/callback');

var api = express.Router();

api.get('/login', (req, res) => {
    res.redirect(`https://discord.com/api/oauth2/authorize?client_id=${CLIENT_ID}&redirect_uri=${redirect}&response_type=code&scope=email%20identify%20guilds`);
});

api.get('/callback', catchAsync(async (req, res) => {
    if (!req.query.code) throw new Error('NoCodeProvided');
    const code = req.query.code;
    const creds = btoa(`${CLIENT_ID}:${CLIENT_SECRET}`);
    const response = await fetch(`https://discord.com/api/oauth2/token?grant_type=authorization_code&code=${code}&redirect_uri=${redirect}`, {
        method: 'POST',
        headers: {
            Authorization: `Basic ${creds}`,
        },
    });
    const json = await response.json();
    res.redirect(`/?token=${json.access_token}`);
}));

module.exports = api;