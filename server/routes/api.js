const express = require('express');
const router = express.Router();

const Recipe = require('../models/Recipe');

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
	Recipe.findByIdAndUpdate(req.params.id, req.body).then(() => {
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

module.exports = router;
