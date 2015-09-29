var mongoose = require('mongoose');

var TodoSchema = new mongoose.Schema({
	text: {
		type: String,
		required: true
	}
});

module.exports = TodoSchema;