const mongoose = require('mongoose');

const User = mongoose.model('User');

exports.add_to_favorite = (req, res) => {
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
};

exports.delete_favorite = (req, res) => {
	const { recipeId } = req.body;

	User.findByIdAndUpdate({ _id: req.params.userId }, { $pull: { favorites: recipeId } }).then(() => {
		User.findById({
			_id: req.params.userId,
		}).then(() => res.send(res.status));
	});
};

exports.get_favorites = (req, res) => {
	User.findById({
		_id: req.params.userId,
	})
		.populate('favorites')
		.exec((err, recipe) => {
			res.send(recipe);
		});
};
