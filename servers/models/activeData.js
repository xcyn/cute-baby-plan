const mongoose = require('mongoose')
mongoose.Promise = global.Promise;
const Schema = mongoose.Schema;
const activeDataSchema = new Schema({
	version: Number,
	pothunterNum: String,
	voteNum: String,
	visitNum: String
})
activeDataSchema.index();

const ActiveData = mongoose.model('allActiveData', activeDataSchema, 'allActiveData');

module.exports = ActiveData