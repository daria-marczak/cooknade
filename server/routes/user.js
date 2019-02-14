const express = require('express');
const router = express.Router();

const User = require('../models/User');

router.put('/:userId/favorites', (req, res) => {
	const { recipeId } = req.body;
	console.log(req.params);

	User.findByIdAndUpdate(
		{
			_id: req.params.userId,
		},
		{ $push: { favorites: recipeId } }
	).then(() => {
		User.findById({
			_id: req.params.userId,
		}).then(user => res.send(user));
	});
});

router.get('/:userId/favorites', (req, res) => {
	console.log(req.params.userId);

	User.findById({
		_id: req.params.userId,
	}).then(user => {
		res.send(user);
	});
});
// route for adding favorites to a user schema, this will be an array
module.exports = router;
