"use strict";

var Player = require("../models/player");

function savePlayer(req, res) {
  var player = new Player();

  var params = req.body;

  if (params.name && params.team && params.country_code && params.discord_id) {
    player.player_name = params.name;
    player.player_team = params.team;
    player.country.code = params.country_code;
    player.switch_fc = params.switch_fc;
    player.mkc_player_profile = params.mkc_profile;
    player.discord.unique_id = params.discord_id;
    player.discord.roles = params.discord_roles;
    player.player_registry.in = params.player_registry_in;

    player.save((err, playerStored) => {
      if (err) {
        res.status(500).send({
          message: "Server error",
        });
      } else {
        if (playerStored) {
          res.status(200).send({
            player: playerStored,
          });
        } else {
          res.status(200).send({
            message: "Player not added",
          });
        }
      }
    });
  } else {
    res.status(200).send({
      message: "*name*, *team* and *country code* are required fields",
    });
  }
}

function getPlayers(req, res) {
  Player.find({}, { _id: 0, __v: 0 }).exec((err, players) => {
    if (err) {
      res.status(500).send({
        message: "Server error",
      });
    } else {
      if (players) {
        res.status(200).send({
          players,
        });
      } else {
        res.status(404).send({
          message: "Players not found",
        });
      }
    }
  });
}

function getPlayer(req, res) {
  var playerId = req.params.id;
  var searchBy;

  if (!(playerId.length != 8 || playerId.length != 18)) {
    res.status(500).send({
      message: "Incorrect ID format",
    });
  } else {
    if (playerId.length == 8) {
      searchBy = { player_id: playerId };
    } else {
      searchBy = { "discord.unique_id": playerId };
    }

    Player.findOne(searchBy, { _id: 0, __v: 0 }).exec((err, player) => {
      if (err) {
        res.status(500).send({
          message: "Server error",
        });
      } else {
        if (player) {
          res.status(200).send({
            player,
          });
        } else {
          res.status(404).send({
            message: "Player not found",
          });
        }
      }
    });
  }
}

function updatePlayer(req, res){
    var playerId = req.params.id;
    var update = req.body;
    var searchBy;
    if (!(playerId.length != 8 || playerId.length != 18)) {
        res.status(500).send({
          message: "Incorrect ID format",
        });
      } else {
        if (playerId.length == 8) {
          searchBy = { player_id: playerId };
        } else {
          searchBy = { "discord.unique_id": playerId };
        } 

        Player.findOneAndUpdate(searchBy, update, {new:true}, (err, playerUpdated) => {
            if(err) {
                res.status(500).send({
                    message: 'Server error'
                })
            } else {
                if(playerUpdated){
                    res.status(200).send({
                        status: 200,
                        team: playerUpdated
                    });
                } else {
                    res.status(404).send({
                        message: 'Player not found'
                    });
                }
            }
        });
    }
}

function deletePlayer(req, res) {
    var playerId = req.params.id;

    Player.findOneAndRemove({'player_id': playerId}, (err, playerRemoved) => {
        if(err) {
            res.status(500).send({
                message: 'Server error'
            })
        } else {
            if(playerRemoved){
                res.status(200).send({
                    player: playerRemoved
                });
            } else {
                res.status(404).send({
                    message: 'Player not found'
                });
            }
        }
    })
}

module.exports = {
  savePlayer,
  getPlayers,
  getPlayer,
  updatePlayer,
  deletePlayer
};
