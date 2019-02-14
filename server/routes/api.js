const express = require('express');
const router = express.Router();

const Recipe = require('../models/Recipe');
const User = require('../models/User');

router.get('/recipes', (req, res) => {
	Recipe.find({}).then(recipes => {
		res.send(recipes);
	});
});

router.get('/recipes/:id', (req, res) => {
	Recipe.findById({
		_id: req.params.id,
	}).then(recipe => {
		res.send(recipe);
	});
});

router.post('/recipes', (req, res, next) => {
	Recipe.create(req.body)
		.then(recipe => {
			res.send({ recipe });
		})
		.catch(next);
});

router.put('/recipes/:id', (req, res, next) => {
	Recipe.findByIdAndUpdate({ _id: req.params.id }, req.body).then(() => {
		Recipe.findOne({ _id: req.params.id }).then(recipe => {
			res.send(recipe);
		});
	});
});

router.delete('/recipes/:id', (req, res, next) => {
	Recipe.findByIdAndRemove({ _id: req.params.id }).then(recipe => {
		res.send(recipe);
	});
});

router.get('/current_user', (req, res) => {
	res.send(req.user);
});

router.post('/:userId/favorites', (req, res) => {
	User.findByIdAndUpdate({ _id: req.params.id }, req.body).then(() => {
		
	})
});

// route for adding favorites to a user schema, this will be an array

module.exports = router;
