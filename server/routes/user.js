const express = require('express');
const router = express.Router();

const User = require('../models/User');

router.get('/:userId/favorites', (req, res) => {
	// User.findByIdAndUpdate(req.params.id, req.body, { new: true }).then(() => {
	// 	res.send(req.user);
	// });
	User.findOne({ _id: req.params.id }).then(() => {
		res.send(req.user);
	});
});

// route for adding favorites to a user schema, this will be an array
module.exports = router;
