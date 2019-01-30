'use strict'

var mongoose = require('mongoose');
var app = require('./app');
var port = 3800;
require('dotenv').config();

var db_user = process.env.DB_USER;
var db_pass = process.env.DB_PASS;
var db_cluster = process.env.DB_CLUSTER;
var db_db = process.env.DB_DATABASE;

mongoose.connect('mongodb+srv://'+db_user+':'+db_pass+'@'+db_cluster+'/'+db_db+'?retryWrites=true', { useNewUrlParser: true })
.then(() => {
    console.log('Conexión a MongoDB se ha realizado correctamente.');

    app.listen(port, () => {
        console.log('Server started at localhost:3800');
    });
}).catch(err => console.log(err));


