// server/src/controllers/recipeController.js
import { RecipeModel } from '../models/Recipe.js';

const createRecipe = async (req, res) => {
  try {
    const { title, description, ingredients, instructions, imageUrl, createdBy } = req.body;

    // Create a new recipe
    const newRecipe = await RecipeModel.create({
      title,
      description,
      ingredients,
      instructions,
      imageUrl,
      createdBy,
    });

    res.status(201).json(newRecipe);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server Error' });
  }
};
export default createRecipe;

// MongoDB collection "recipes" will be populated with documents based on the RecipeSchema structure
