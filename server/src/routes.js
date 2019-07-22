const express = require('express');
const appRouter = express.Router();
const userController = require('./controllers/UserController');

// Users CRUD
appRouter.post('/users', userController.register);

// appRouter.post('/login',
// 	passport.authenticate('local', { failureRedirect: '/login' }),
// 	(req, res) => {
// 		res.redirect('/');
// 	}
// );



module.exports = appRouter;
