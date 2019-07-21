'use strict';

require('dotenv').config();

const fs = require('fs');
const join = require('path').join;
const app = require('./src/app');
const mongoose = require('mongoose');
const passport = require('passport');
const config = require('./src/config');

const models = join(__dirname, 'src/models');

// Bootstrap models
fs.readdirSync(models)
    .filter(file => ~file.indexOf('.js'))
    .forEach(file => require(join(models, file)));

// Bootstrap routes
// require('./src/config/passport')(passport);
// require('./src/config/express')(app, passport);
// require('./src/config/routes')(app, passport);

function listen() {
    console.log('Starting at ' + (new Date()).toString());
    console.log(`Server listening on port ${config.port}`);
}

function connect() {
    const options = { keepAlive: 1, useNewUrlParser: true };
    mongoose.connect(config.dbUrl, options);

    return mongoose.connection;
}

const connection = connect();

connection
    .on('error', console.log)
    .on('disconnected', connect)
    .once('open', listen);

app.listen(config.port, listen);
