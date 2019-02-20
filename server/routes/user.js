const express = require('express');
const router = express.Router();

const User = require('../models/User');
const Recipe = require('../models/Recipe');

router.put('/:userId/favorites', (req, res) => {
	const { recipeId } = req.body;

	User.findByIdAndUpdate(
		{
			_id: req.params.userId,
		},
		{ $addToSet: { favorites: recipeId } }
	).then(() => {
		User.findById({
			_id: req.params.userId,
		}).then(() => res.send(res.status));
	});
});

router.get('/:userId/favorites', (req, res) => {
	User.findById({
		_id: req.params.userId,
	})
		.populate('Recipe')
		.exec((err, recipe) => {
			if (err) return handleError(err);
			console.log('The recipe name is', recipe.title);
		})
		.then(user => {
			res.send(user);
		});
});

router.delete('/:userId/favorites', (req, res) => {
	const { recipeId } = req.body;

	User.findByIdAndUpdate({ _id: req.params.userId }, { $pull: { favorites: recipeId } }).then(() => {
		User.findById({
			_id: req.params.userId,
		}).then(() => res.send(res.status));
	});
});

module.exports = router;
