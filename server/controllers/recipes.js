const mongoose = require('mongoose');

const Recipe = require('../models/Recipe');
const User = require('../models/User');

exports.get_recipes = (req, res) => {
	Recipe.find({})
		.then(recipes => {
			res.send(recipes);
		})
		.catch(error => {
			res.status(500).json({ error });
		});
};

exports.get_one_recipe = (req, res) => {
	Recipe.findById({
		_id: req.params.id,
	})
		.populate('fans')
		.exec((err, user) => {
			if (err) res.send(err);
			res.send(user);
		});
};

exports.create_new_recipe = (req, res, next) => {
	Recipe.create(req.body)
		.then(recipe => {
			User.update(
				{ _id: req.body.author },
				{
					$push: { authoredRecipes: recipe.id },
				}
			);
			res.send(res.status);
		})
		.catch(error => {
			res.status(500).json({ error });
		});
};

exports.edit_recipe = (req, res, next) => {
	Recipe.findByIdAndUpdate(req.params.id, req.body)
		.then(() => {
			Recipe.findOne({ _id: req.params.id }).then(recipe => {
				res.send(res.status);
			});
		})
		.catch(error => {
			res.status(500).json({ error });
		});
};

exports.delete_recipe = (req, res, next) => {
	Recipe.findByIdAndRemove({ _id: req.params.id })
		.then(recipe => {
			res.send(res.status);
		})
		.catch(error => {
			res.status(500).json({ error });
		});
};
