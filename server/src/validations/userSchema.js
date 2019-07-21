const Joi = require('joi');

const userSchema = Joi.object().keys({
	email: Joi.string().required().email(),
	name: Joi.string().required(),
	password: Joi.string().required(),
});

module.exports = userSchema;
