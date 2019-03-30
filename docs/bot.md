# Bot

## Info

<p align="center">
    <img src="https://img.shields.io/uptimerobot/status/m781988851-938274f9a647999f631d51b0.svg?label=server&style=flat" /> <img src="https://img.shields.io/uptimerobot/ratio/m781988851-938274f9a647999f631d51b0.svg?label=server%20uptime&style=flat" />&nbsp;
    <img src="https://img.shields.io/uptimerobot/status/m781341370-d375025844aeece012d108ba.svg?label=bot&style=flat" /> <img src="https://img.shields.io/uptimerobot/ratio/m781341370-d375025844aeece012d108ba.svg?label=bot%20uptime&style=flat" />&nbsp;
    <img src="https://img.shields.io/discord/410932889601966100.svg?style=flat&logo=discord&logoColor=%23ffffff&colorB=%23FF1865" />

</p>

<p align="center">
    <img width="250" height="300" src="https://cdn.discordapp.com/attachments/503303753705848838/541225512459042818/tet_github.png">
</p>

### About

Discord bot built for team management and helpful info commands.

### Used

- Nodejs
- Glitch hosting - [site](https://glitch.com)

### Dependencies

- express
- discord.js - [site](https://discord.js.org)
- http
- _dotenv_ (implicit)

### Other

- Discord Developer Portal - [site](https://discordapp.com/developers)
- Discord Webhooks

### Check status

[http://disboard-bot.glitch.me](http://disboard-bot.glitch.me)

### Repository

[https://github.com/Qu4k3/disboard-bot](https://github.com/Qu4k3/disboard-bot)

## Commands

**Legend**

`static` &nbsp; - Retrieve a pre-set information

`library` - Retrieve information by using discord.js library

`dynamic` - Retrieve information by calling the API

::: tip Extra
 _Not a command but..._ depending on the role that is attributed to new members, an embeded response is shown to the user, with an introtuction/welcoming message. `static`
:::

### List of available commands

| Commands  | Type  | Description           | Usage  |
|:----------|:----------|:----------------------|:-------|
| +tag | `static`      | Shows an embeded response with name and team tag.                                                                                                                                | +tag |
| +tabla | `static`    | Shows an embeded response with a direct link to table generator.                                                                                                                 | +tabla |
| +info | `library`<br><br>`dynamic`     | Shows an embeded response with user information: incorporation date, played games, average points, W/L ratio.<br>Can be used to check other teammate's information.              | +info<br>+info&#160;@user |
| +wars | `dynamic`     | Shows an embeded response with team information: played matches, victories, loses, draws, % wined matches.                                                                       | +wars |
| +disboard | `library` | Shows an embeded response with a list of members split by their role, in order to check how many members/allys/trials there are, as well as the number of members on the server. | +disboard |
| ~~+snl~~ | `static`  | Shows a list of registered users elegible to compete in the league.<br>`removed`                                                                                                 | ~~+snl~~ |
| +invi | `static`     | Shows an embeded response with an invite server link.                                                                                                                            | +invi |
| +r | `static`        | Shows a random image/gif from NGNL series.                                                                                                                                       | +r  |
| +help | `static`     | Shows an embeded response with a list of commands available.                                                                                                                     | +help |