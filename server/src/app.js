const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const routes = require('./routes');
const { healthCheck } = require('./controllers/HealthController');
const config = require('./config');

const app = express();

app.use(cors());
app.use(bodyParser.json());

require('./passport/passport');

// controllers
app.get('/', healthCheck);
app.use(config.basePath, routes);

module.exports = app;

