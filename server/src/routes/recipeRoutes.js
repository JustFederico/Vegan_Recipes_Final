import express from 'express';
import {
  createRecipe,
  getAllRecipes,
  getRecipeById,
  updateRecipe,
  deleteRecipe,
} from '../controllers/recipeController.js';

const router = express.Router();

// Endpoints for creating a new recipe
router.post('/recipes', createRecipe);

//retrieving all recipes
router.get('/recipes', getAllRecipes);


router.get('/recipes/:id', getRecipeById);


router.put('/recipes/:id', updateRecipe);


router.delete('/recipes/:id', deleteRecipe);

export default router;
