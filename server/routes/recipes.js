const express = require('express');
const router = express.Router();

const RecipesController = require('../controllers/recipes');

router.get('/recipes', RecipesController.get_recipes);

router.get('/recipes/:id', RecipesController.get_one_recipe);

router.post('/recipes', RecipesController.create_new_recipe);

router.put('/recipes/:id', RecipesController.edit_recipe);

router.delete('/recipes/:id', RecipesController.delete_recipe);

module.exports = router;
