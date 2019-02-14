const express = require('express');
const router = express.Router();

const User = require('../models/User');

router.put('/:userId/favorites', (req, res) => {
	const recipeId = req.body.favorites;
	console.log(recipeId);

	User.findByIdAndUpdate(req.params.id, { $push: { favorites: recipeId } }).then(() => {
		User.findById(req.params.id).then(user => console.log(user));
		// console.log(user);
	});
});

// route for adding favorites to a user schema, this will be an array
module.exports = router;
