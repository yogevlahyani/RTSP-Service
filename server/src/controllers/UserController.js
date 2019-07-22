const HttpStatus = require('http-status-codes');
const bcrypt = require('bcryptjs');
const passport = require('passport');
const jwt = require('jsonwebtoken');
const User = require('../models/user');
const userSchema = require('../validations/userSchema');
const { validate } = require('../helpers/validator');
const config = require('../config');

/**
 * User controller
 */
class UserController {
	static async register(req, res) {
		const data = await validate(req.body, userSchema);
		if (data.errors && data.errors.length > 0) {
			return res.status(HttpStatus.BAD_REQUEST).send(data);
		}

		const user = await User.findOne({ email: req.body.email }).exec();

		if (user) {
			return res.status(HttpStatus.CONFLICT).send('User already exists');
		}

		const salt = await bcrypt.genSalt(10);
		const password = await bcrypt.hash(req.body.password, salt);
		const newUser = new User({
			...req.body,
			password,
		});
		await newUser.save();

		return res.status(HttpStatus.OK).json({
			id: newUser._id,
			email: newUser.email,
			name: newUser.name,
		});
	}

	static authenticate(req, res) {
		passport.authenticate('local', { session: false }, (err, user, info) => {
			if (err || !user) {
				return res.status(HttpStatus.BAD_REQUEST).json({
					message: 'Something is not right',
					user,
				});
			}

			req.login(user, { session: false }, (err) => {
				if (err) {
					res.status(HttpStatus.INTERNAL_SERVER_ERROR).send(err);
				}

				// generate a signed son web token with the contents of user object and return it in the response
				const access_token = jwt.sign({ id: user._doc._id, name: user._doc.name, email: user._doc.email }, config.jwt.secret);
				return res.json({ access_token });
			});
		})(req, res);
	}

}

module.exports = {
	register: UserController.register,
	authenticate: UserController.authenticate,
};