const mongoose = require('mongoose')
mongoose.Promise = global.Promise;
const Schema = mongoose.Schema;
const pothunterSchema = new Schema({
	photo: String,
	phone: String,
	name: String,
	voteNum: Number
})
pothunterSchema.index();

const Pothunter = mongoose.model('allPothunter', pothunterSchema, 'allPothunter');

module.exports = Pothunter