const mongoose = require('mongoose');
const { Schema } = mongoose;

const UserSchema = Schema({
	googleId: String,
	name: String,
	favorites: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Recipe' }],
	authoredRecipes: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Recipe' }],
});

const User = mongoose.model('User', UserSchema);

module.exports = User;
