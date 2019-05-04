<p align="center">
    <img src="https://circleci.com/gh/Qu4k3/disboard-api.svg?style=svg&circle-token=c1aea5451e8ad018851e45c477d8f4112b7ebfb4" />&nbsp;
    <img src="https://img.shields.io/uptimerobot/status/m781988862-3ea72d807b59330ef0d3eaac.svg?label=server&style=flat" /> <img src="https://img.shields.io/uptimerobot/ratio/m781988862-3ea72d807b59330ef0d3eaac.svg?label=server%20uptime&style=flat" />&nbsp;
    <img src="https://img.shields.io/uptimerobot/status/m781896193-0fc26013b414711d48d26082.svg?label=API%20status&style=flat" /> <img src="https://img.shields.io/uptimerobot/ratio/m781896193-0fc26013b414711d48d26082.svg?label=API%20uptime&style=flat" />
</p>
<p align="center">
    <img width="250" height="300" src="https://cdn.discordapp.com/attachments/561938814063607823/574335592259780608/shuvi.gif">
</p>

# Disboard API

API made in nodejs connected through mongoose to a mongodb database hosted in a mongodb Atlas cluster.

Project hosted in Heroku.

## Used

- Nodejs
- MongoDB Atas Cluster
- Heroku hosting

### Dependencies

- Express
- body-parser
- btoa
- dotenv - [docs](https://github.com/motdotla/dotenv)
- mongoose
- nanoid - [docs](https://github.com/ai/nanoid)
- nodemon

## Installation

### Clone

Clone this repo to your local machine using

```shell
git clone https://github.com/Qu4k3/disboard-api.git
```

### Setup

> run `npm install` to install all the dependencies

```shell
npm install
```

This project uses a `.env` file

The `.env` variables you will need to supply are

```shell
DB_USER=
DB_PASS=
DB_CLUSTER=
DB_NAME=
CLIENT_ID=
CLIENT_SECRET=
```

| Name            | Use                                            |
|:----------------|:-----------------------------------------------|
| `DB_USER`       | Database user                         |
| `DB_PASS`       | Database password                          |
| `DB_CLUSTER`    | Database cluster name     `*.mongodb.net`          |
| `DB_NAME`       | Database name to use   |
| `CLIENT_ID`     | Discord App ID |
| `CLIENT_SECRET` | Discord App Secret |

> run `npm run dev` or `npm start` to start the application

`dev` runs nodemon to update the project each time a file is modified

```shell
$ npm run dev
or
$ npm start
```

You will then be able to access it at localhost:3800
