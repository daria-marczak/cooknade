const User = mongoose.model('user');

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

exports.get_favorites = (req, res) => {
	User.findOne({
		_id: req.params.userId,
	}).then(user => {
		res.send(user.favorites);
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
