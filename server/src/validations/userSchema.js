const Joi = require('joi');

const userSchema = Joi.object().keys({
	email: Joi.string().required().email(),
	name: Joi.string().allow(''),
	password: Joi.string().required(),
});

module.exports = userSchema;
