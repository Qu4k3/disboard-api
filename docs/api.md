# API

## Info

<p align="center">
    <img src="https://circleci.com/gh/Qu4k3/disboard-api.svg?style=svg&circle-token=c1aea5451e8ad018851e45c477d8f4112b7ebfb4" />&nbsp;
    <img src="https://img.shields.io/uptimerobot/status/m781988862-3ea72d807b59330ef0d3eaac.svg?label=server&style=flat" /> <img src="https://img.shields.io/uptimerobot/ratio/m781988862-3ea72d807b59330ef0d3eaac.svg?label=server%20uptime&style=flat" />&nbsp;
    <img src="https://img.shields.io/uptimerobot/status/m781896193-0fc26013b414711d48d26082.svg?label=API%20status&style=flat" /> <img src="https://img.shields.io/uptimerobot/ratio/m781896193-0fc26013b414711d48d26082.svg?label=API%20uptime&style=flat" />
</p>
<p align="center">
    <img width="250" height="300" src="https://cdn.discordapp.com/attachments/503303753705848838/541409603255009291/shuvi-white.gif">
</p>

### About

API made in nodejs connected through mongoose to a mongodb database hosted in a mongodb Atlas cluster.

Project hosted in Heroku.

### Used

- Nodejs
- MongoDB Atas Cluster
- Heroku hosting

### Dependencies

- Express
- body-parser
- dotenv
- btoa
- dotenv - [docs](https://github.com/motdotla/dotenv)
- mongoose
- nanoid - [docs](https://github.com/ai/nanoid)

#### Other

- nodemon

## Players

Lorem ipsum

### Resource description /players

| METHOD        | PATH           | DESCRIPTION  |
| ------------- |-------------| -----|
| GET       | /players | Retrieve a list of all players |
| GET       | /player/{playerId}      |   Retrieve a specific player by it's ID |
| POST      | /player      |    Add a new player to database |
| PUT       | /player/{playerId}      |    Edit information from a specific player |
| DEL       | /player/{playerId}      |    Delete a player |

::: warning
Some routes are autenticated and will not be available for public
:::

### Endpoints and methods /players

### Parameters /players

### Request example /players

### Response example and schema /players

``` json
{
    "player_name" : String, // Player nickname
    "player_team" : String, // Refer to team's Id
    "country" : {
        "name" : String, // Country
        "code" : String // Country code
    },
    "player_registry" : [
        {
            "role" : String, // Role type (ex: member, ally, trial)
            "in" : Date, // join date
            "out" : Date, // leave date
        }
    ],
    "discord" : {
        "unique_id" : String, // Discord unique Id
        "user_tag" : String, // Discord user tag
        "avatar_url" : String, // Discord's user profile picture
        "roles" : [
            {
                "role" : String, // Discord role
                "role_color" : String // Discord role color in hexadecimal
            },
            {
                "role" : String, // Discord role
                "role_color" : String // Discord role color in hexadecimal
            }
        ]
    },
    "switch_fc" : String, // Nintendo Switch's friend code
    "mkc_player_profile" : String // mkc team link (ex: https://www.mariokartcentral.com/mkc/players/10)
}
```

## Teams

Lorem ipsum

### Resource description /teams

| METHOD        | PATH           | DESCRIPTION  |
| ------------- |-------------| -----|
| GET       | /teams | Retrieve a list of all teams |
| GET       | /team/{teamId}      |   Retrieve a specific team by it's ID |
| POST      | /team      |    Add a new team to database |
| PUT       | /team/{teamId}      |    Edit information from a specific team |
| DEL       | /team/{teamId}      |    Delete a team |

::: warning
Some routes are autenticated and will not be available for public
:::

### Endpoints and methods /teams

### Parameters /teams

### Request example /teams

### Response example and schema /teams

``` json
{
    "team_name" : "", // String
    "team_tag" : "", // String
    "team_logo" : "", // direct image link
    "mkc_team_profile" : "" // mkc team link (ex: https://www.mariokartcentral.com/mkc/teams/42)
}
```

## Wars

### Resource description /wars

| METHOD        | PATH           | DESCRIPTION  |
| ------------- |-------------| -----|
| GET       | /wars | Retrieve a list of all teams |
| GET       | /war/{warId}      |   Retrieve a specific team by it's ID |
| POST      | /war      |    Add a new team to database |
| PUT       | /war/{warId}      |    Edit inforamation |
| DEL       | /war/{warId}      |    Delete a war |

::: warning
Some routes are autenticated and will not be available for public
:::

### Endpoints and methods /wars

### Parameters /wars

### Request example /wars

### Response example and schema /wars

``` json
{
    "played_at" : Date, // Date where the war was played
    "game" : {
        "name" : String, // Game's code --default: MK8D
        "mode" : String // Game's mode code --default: 150cc
    },
    "type" : String, // Type of game played --default: friendly
    "tags" : [
        String // Tags to make wars groups or associations
    ],
    "home_team" : {
        "team" : ObjectId, // Refer to team's Id
        "score" : Number, // Team final score
        "penality" : Number, // Penality points
        "players" : [
            {
                "player" : ObjectId, // Refer to player's Id
                "score" : Number // player's score
            },
            {
                "player" : ObjectId, // Refer to player's Id
                "score" : Number // player's score
            },
            {
                "player" : ObjectId, // Refer to player's Id
                "score" : Number // player's score
            }
        ]
    },
    "away_team" : {
        "team" : ObjectId, // Refer to team's Id
        "score" : Number, // Team final score
        "penality" : Number, // Penality points
        "players" : [
            {
                "player" : ObjectId, // Refer to player's Id
                "score" : Number // player's score
            },
            {
                "player" : ObjectId, // Refer to player's Id
                "score" : Number // player's score
            },
            {
                "player" : ObjectId, // Refer to player's Id
                "score" : Number // player's score
            }
        ]
    }
}
```
