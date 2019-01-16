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
	res.send({ type: 'PUT' });
});

router.delete('/recipe/:id', function(req, res, next) {
	res.send({ type: 'DELETE' });
});

router.get('/categories', function(req, res, next) {
	res.send({ type: 'GET' });
});

module.exports = router;
