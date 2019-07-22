const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const RTSPSchema = new Schema({
	name: { type: String, required: false },
	url: { type: String, required: true },
});

module.exports = mongoose.model('RTSP', RTSPSchema);
