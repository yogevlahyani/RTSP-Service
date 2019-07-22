const express = require('express');
const appRouter = express.Router();
const passport = require('passport');
const userController = require('./controllers/UserController');
const rtspController = require('./controllers/RtspController');

// Users CRUD
appRouter.post('/users', userController.register);

// Auth
appRouter.post('/auth', userController.authenticate);

// RSTP CRUD
appRouter.post('/rtsps', passport.authenticate('jwt', { session: false }), rtspController.create);
appRouter.get('/rtsps', passport.authenticate('jwt', { session: false }), rtspController.getAll);
appRouter.get('/rtsps/:id', passport.authenticate('jwt', { session: false }), rtspController.getOne);



module.exports = appRouter;
