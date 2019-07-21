const express = require('express');
const appRouter = express.Router();
const asyncHandler = require('./helpers/asyncHandler');
const userController = require('./controllers/UserController');

appRouter.post('/user', asyncHandler(userController.register));

// appRouter.post('/login',
// 	passport.authenticate('local', { failureRedirect: '/login' }),
// 	(req, res) => {
// 		res.redirect('/');
// 	}
// );



module.exports = appRouter;
