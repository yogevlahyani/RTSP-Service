const asyncHandler = (method) => async (req, res) => {
	if (typeof method !== 'function') {
		throw new Error('No function provided');
	}

	await method(req, res);
};

module.exports = asyncHandler;
