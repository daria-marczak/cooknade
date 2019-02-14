const mongoose = require('mongoose');
const { Schema } = mongoose;

const UserSchema = new Schema({
	googleID: String,
	name: String,
	favorites: [{ type: String, default: [] }],
});

const User = mongoose.model('user', UserSchema);

module.exports = User;
