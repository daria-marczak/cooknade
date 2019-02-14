const mongoose = require('mongoose');
const { Schema } = mongoose;

const userSchema = new Schema({
	googleID: String,
	name: String,
	favorites: { type: Array, default: [] },
});

mongoose.model('user', userSchema);
