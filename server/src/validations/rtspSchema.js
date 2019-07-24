const Joi = require('joi');

const rtspSchema = Joi.object().keys({
	name: Joi.string().allow(''),
	url: Joi.string().uri().regex(/^rtsp:/).required(),
});

module.exports = rtspSchema;
