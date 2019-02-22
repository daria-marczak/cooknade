const express = require('express');
const router = express.Router();

const UserController = require('../controllers/users');

router.put('/:userId/favorites', UserController.add_to_favorite);

router.get('/:userId/favorites', UserController.get_favorites);

router.delete('/:userId/favorites', UserController.delete_favorite);

module.exports = router;
