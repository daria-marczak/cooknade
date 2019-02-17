const express = require('express');
const router = express.Router();

const User = require('../models/User');

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
	}).then(user => {
		res.send(user);
	});
});

module.exports = router;
