const mongoose = require('mongoose')
mongoose.Promise = global.Promise;
const Schema = mongoose.Schema;
const UserSchema = new Schema({
	name: String,
	password: String,
	votes: Array
})
UserSchema.index();

const user = mongoose.model('alluser', UserSchema, 'alluser');

module.exports = user