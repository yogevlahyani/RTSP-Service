'use strict';

/*
 * nodejs-express-mongoose
 * Copyright(c) 2015 Madhusudhan Srinivasa <madhums8@gmail.com>
 * MIT Licensed
 */

/**
 * Module dependencies
 */

// eslint-disable-next-line
require('dotenv').config();

const fs = require('fs');
const join = require('path').join;
const app = require('./app/app');
const mongoose = require('mongoose');
const passport = require('passport');
const config = require('./app/config');

const models = join(__dirname, 'app/models');

// Bootstrap models
fs.readdirSync(models)
    .filter(file => ~file.indexOf('.js'))
    .forEach(file => require(join(models, file)));

// Bootstrap routes
// require('./app/config/passport')(passport);
// require('./app/config/express')(app, passport);
// require('./app/config/routes')(app, passport);

// function listen() {
//     app.listen(port);
//     console.log(`Express app started on port ${port}`);
// }
//
// function connect() {
//     const options = { keepAlive: 1, useNewUrlParser: true };
//     mongoose.connect(config.dbUrl, options);
//
//     return mongoose.connection;
// }
//
// const connection = connect();
//
// connection
//     .on('error', console.log)
//     .on('disconnected', connect)
//     .once('open', listen);

app.set('port', config.port);

app.listen(app.get('port'), () => {
    console.log('Starting at ' + (new Date()).toString());
    console.log(`Server listening on port ${app.get('port')}`);
});
