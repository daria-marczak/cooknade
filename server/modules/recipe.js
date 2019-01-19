const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const RecipeSchema = new Schema({
	title: {
		type: String,
		required: [true, 'Title of the recipe is required'],
	},
	category: String,
	imgUrl: String,
	ingredients: {
		type: Array,
		required: [true, 'Ingredients are required'],
	},
	// timeOfPreparation: {
	// 	type: Number,
	// 	required: true,
	// },
	// preparation: {
	// 	type: String,
	// 	required: true,
	// },
	// source: {
	// 	sourceName: {
	// 		type: String,
	// 		required: true,
	// 	},
	// 	sourceUrl: {
	// 		type: String,
	// 		required: true,
	// 	},
	// },
});

const Recipe = mongoose.model('recipe', RecipeSchema);

module.exports = Recipe;
