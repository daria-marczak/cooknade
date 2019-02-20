const mongoose = require('mongoose');
const { Schema } = mongoose;

const UserSchema = Schema({
	_id: Schema.Types.ObjectId,
	googleId: String,
	name: String,
	favorites: [{ type: Schema.Types.ObjectId, default: [], ref: 'Recipe' }],
});

const User = mongoose.model('user', UserSchema);

module.exports = User;
