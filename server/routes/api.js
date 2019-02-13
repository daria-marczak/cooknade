const express = require('express');
const router = express.Router();

const Recipe = require('../models/Recipe');

router.get('/recipes', function(req, res) {
	Recipe.find({}).then(function(recipes) {
		res.send(recipes);
	});
});

router.get('/recipes/:id', function(req, res) {
	Recipe.findById({
		_id: req.params.id,
	}).then(function(recipe) {
		res.send(recipe);
	});
});

router.post('/recipes', function(req, res, next) {
	Recipe.create(req.body)
		.then(function(recipe) {
			res.send({ recipe });
		})
		.catch(next);
});

router.put('/recipes/:id', function(req, res, next) {
	Recipe.findByIdAndUpdate({ _id: req.params.id }, req.body).then(function() {
		Recipe.findOne({ _id: req.params.id }).then(function(recipe) {
			res.send(recipe);
		});
	});
});

router.delete('/recipes/:id', function(req, res, next) {
	Recipe.findByIdAndRemove({ _id: req.params.id }).then(function(recipe) {
		res.send(recipe);
	});
});

router.get('/current_user', (req, res) => {
	res.send(req.user);
});

module.exports = router;
