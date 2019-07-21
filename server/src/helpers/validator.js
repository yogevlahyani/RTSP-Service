const Joi = require('joi');

// Bad request format
const validate = (input, schema) => {
	const result = Joi.validate(input, schema);

	if (result.error) {
		const field = result.error.details[0].context.key;
		const description = result.error.details[0].message;

		return {
			type: 'validation error',
			title: `Your request parameters didn't validate.`,
			errors: [
				{
					type: 'invalid_param',
					field,
					title: description,
				},
			],
		};
	}

	return result.value;
};

module.exports = {
	validate,
};