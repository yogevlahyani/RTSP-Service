const express = require('express');
const appRouter = express.Router();
const healthController = require('./controllers/HealthController');

appRouter.get('/health', healthController.healthCheck);

module.exports = appRouter;
