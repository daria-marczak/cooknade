const express = require('express');
const router = express.Router();

const Recipe = require('../modules/recipe');

router.get('/recipes', function(req, res) {
	res.send({ type: 'GET' });
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

router.get('/categories', function(req, res, next) {
	res.send({ type: 'GET' });
});

module.exports = router;
