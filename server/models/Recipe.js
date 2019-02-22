const mongoose = require('mongoose');
const { Schema } = mongoose;

const RecipeSchema = new Schema({
	title: {
		type: String,
		required: [true, 'Title of the recipe is required'],
	},
	category: {
		type: Array,
		required: [true, 'Category is required'],
	},
	description: {
		type: String,
		required: [true, 'Description is required'],
	},
	imgUrl: {
		type: String,
		required: [true, 'Image is required'],
	},
	ingredients: {
		type: Array,
		required: [true, 'Ingredients are required'],
	},
	timeOfPreparation: {
		type: String,
		required: true,
	},
	preparation: {
		type: String,
		required: true,
	},
	sourceName: {
		type: String,
		required: true,
	},
	sourceUrl: {
		type: String,
		required: true,
	},
	fans: [{ type: mongoose.Schema.Types.ObjectId, ref: 'User' }],
});

const Recipe = mongoose.model('Recipe', RecipeSchema);

module.exports = Recipe;
