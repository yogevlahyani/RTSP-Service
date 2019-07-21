const HttpStatus = require('http-status-codes');
const bcrypt = require('bcrypt');
const User = require('../models/user');
const userSchema = require('../validations/userSchema');
const { validate } = require('../helpers/validator');

/**
 * Health controller
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

		return res.status(HttpStatus.OK).json(newUser);
	}
}

module.exports = {
	register: UserController.register,
};