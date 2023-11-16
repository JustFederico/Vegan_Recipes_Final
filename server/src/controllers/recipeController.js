// server/src/controllers/recipeController.js
import { RecipeModel } from '../models/Recipe.js';

export const createRecipe = async (req, res) => {
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



// Get all recipes
export const getAllRecipes = async (req, res) => {
  try {
    const recipes = await RecipeModel.find();
    res.status(200).json(recipes);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: 'Server Error' });
  }
};

// Get a specific recipe by ID
export const getRecipeById = async (req, res) => {
  const { id } = req.params;

  try {
    const recipe = await RecipeModel.findById(id);
    
    if (!recipe) {
      return res.status(404).json({ message: 'Recipe not found' });
    }

    res.status(200).json(recipe);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: 'Server Error' });
  }
};

// Update a specific recipe by ID
export const updateRecipe = async (req, res) => {
  const { id } = req.params;

  try {
    const updatedRecipe = await RecipeModel.findByIdAndUpdate(
      id,
      { $set: req.body },//an update operator-sets the values of the fields in the update/req.bodycontains the updated data
      { new: true }//returns the modified document
    );

    if (!updatedRecipe) {//falsy (null or undefined???
      return res.status(404).json({ message: 'Recipe not found' });
    }

    res.status(200).json(updatedRecipe);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server Error' });
  }
};

// Delete a specific recipe by ID
export const deleteRecipe = async (req, res) => {
  const { id } = req.params;

  try {
    const deletedRecipe = await RecipeModel.findByIdAndDelete(id);

    if (!deletedRecipe) {
      return res.status(404).json({ message: 'Recipe not found' });
    }

    res.status(200).json({ message: 'Recipe deleted successfully' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server Error' });
  }
};


// MongoDB collection "recipes" will be populated with documents based on the RecipeSchema structure
// go to postman: http://localhost:3003/recipes/654f806d62081e564373fc75