const Joi = require('joi');

const rtspSchema = Joi.object().keys({
	name: Joi.string(),
	url: Joi.string().uri().required()
});

module.exports = rtspSchema;
