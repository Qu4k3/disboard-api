'use strict'

var mongoose = require('mongoose');
var app = require('./app');
const config = require('./config.json');
require('dotenv').config();

var db_user = process.env.DB_USER;
var db_pass = process.env.DB_PASS;
var db_cluster = process.env.DB_CLUSTER;
var db_name = process.env.DB_NAME;

mongoose.connect('mongodb+srv://'+db_user+':'+db_pass+'@'+db_cluster+'/'+db_name+'?retryWrites=true&',
{
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false
})
.then(() => {
    console.log('Connection to database established');

    app.listen(process.env.PORT || config.app.port, () => {
        console.log(`Server started at localhost:${process.env.PORT || config.app.port}`);
    });
}).catch(err => console.log(err));


