const express = require('express');
const router = express.Router();

router.get('/recipes', function(req, res) {
	res.send({ type: 'GET' });
});

router.post('/recipes', function(req, res) {
	res.send({ type: 'POST' });
});

router.put('/recipes/:id', function(req, res) {
	res.send({ type: 'PUT' });
});

router.delete('/recipe/:id', function(req, res) {
	res.send({ type: 'DELETE' });
});

router.get('/categories', function(req, res) {
	res.send({ type: 'GET' });
});

module.exports = router;
