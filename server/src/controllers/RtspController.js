const HttpStatus = require('http-status-codes');
const bcrypt = require('bcryptjs');
const passport = require('passport');
const jwt = require('jsonwebtoken');
const RTSP = require('../models/rtsp');
const rtspSchema = require('../validations/rtspSchema');
const { validate } = require('../helpers/validator');
const config = require('../config');

/**
 * Streams controller
 */
class RtspController {
	static async create(req, res) {
		const data = await validate(req.body, rtspSchema);
		if (data.errors && data.errors.length > 0) {
			return res.status(HttpStatus.BAD_REQUEST).send(data);
		}

		const rtsp = await RTSP.findOne({ url: req.body.url, userId: req.user._id }).exec();

		if (rtsp) {
			return res.status(HttpStatus.CONFLICT).send('URL Already exists');
		}

		const newRtsp = new RTSP({
			...req.body,
			userId: req.user._id
		});
		await newRtsp.save();

		return res.status(HttpStatus.CREATED).json({
			id: newRtsp._id,
			url: newRtsp.url,
			name: newRtsp.name,
		});
	}

	static async getAll(req, res) {
		let rtspList = await RTSP.find({ userId: req.user._id }).exec();
		rtspList = rtspList.map(rtsp => ({
			id: rtsp._id,
			url: rtsp.url,
			name: rtsp.name,
		}));

		return res.status(HttpStatus.OK).json(rtspList);
	}

	static async getOne(req, res) {
		const rtsp = await RTSP.findOne({ _id: req.params.id, userId: req.user._id }).exec();

		return res.status(HttpStatus.OK).json({
			id: rtsp._id,
			url: rtsp.url,
			name: rtsp.name,
		});
	}
}

module.exports = {
	create: RtspController.create,
	getAll: RtspController.getAll,
	getOne: RtspController.getOne,
};