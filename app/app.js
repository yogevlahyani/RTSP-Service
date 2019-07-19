const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const routes = require('./routes');
const { healthCheck } = require('./controllers/healthController');
const config = require('./config');

const app = express();

app.use(cors());
app.use(bodyParser.json());

// controllers
app.get('/', healthCheck);
app.use(config.basePath, routes);

module.exports = app;

