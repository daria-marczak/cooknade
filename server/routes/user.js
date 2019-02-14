const express = require('express');
const router = express.Router();

const User = require('../models/User');

router.post('/:userId/favorites', (req, res) => {
	User.findByIdAndUpdate(req.params.id, req.body, { new: true }).then(() => {
		res.send('trying to update');
	});
});

// route for adding favorites to a user schema, this will be an array
module.exports = router;
