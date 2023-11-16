import express from 'express';
import mongoose from 'mongoose';
import {
createRecipe,
  getAllRecipes,
  getRecipeById,
//   updateRecipe,
//   deleteRecipe,
} from '../controllers/recipeController.js';
import { RecipeModel } from '../models/Recipe.js';
const router = express.Router();

// Endpoints for creating a new recipe
// router.post('/recipes', createRecipe);

//retrieving all recipes
// router.get('/', getAllRecipes);

router.get('/', async (req, res) => {
    try {
        const recipes = await RecipeModel.find({}); // {empty object}..returns all of documents in collection, cause we dont hv no conditions of what we wantto find in recipes
        res.status(200).json(recipes);
      } catch (error) {
        console.log(error);
        res.status(500).json({ message: 'Server Error' });
      }

});




router.get('/:id', getRecipeById);


// router.put('/recipes/:id', updateRecipe);


// router.delete('/recipes/:id', deleteRecipe);

export default router;
//----------------------------------------------------------------------------------------

// import express from "express";
// import mongoose from "mongoose";
// import { RecipeModel } from "../models/Recipe.js";
// import { UserModel } from "../models/Users.js";
// import { verifyToken } from "./users.js";

// const router = express.Router();

// router.get("/", async (req, res) => {
//   try {
//     const result = await RecipesModel.find({});
//     res.status(200).json(result);
//   } catch (err) {
//     res.status(500).json(err);
//   }
// });

// Create a new recipe
// router.post("/create", verifyToken, async (req, res) => {
//   const recipe = new RecipesModel({
//     _id: new mongoose.Types.ObjectId(),
//     name: req.body.name,
//     image: req.body.image,
//     ingredients: req.body.ingredients,
//     instructions: req.body.instructions,
//     imageUrl: req.body.imageUrl,
//     // cookingTime: req.body.cookingTime,
//     // userOwner: req.body.userOwner,
//   });
//   console.log(recipe);

//   try {
//     const result = await recipe.save();
//     res.status(201).json({
//       createdRecipe: {
//         name: result.name,
//         image: result.image,
//         ingredients: result.ingredients,
//         instructions: result.instructions,
//         _id: result._id,
//       },
//     });
//   } catch (err) {
//     // console.log(err);
//     res.status(500).json(err);
//   }
// });

// // Get a recipe by ID
// router.get("/:recipeId", async (req, res) => {
//   try {
//     const result = await RecipesModel.findById(req.params.recipeId);
//     res.status(200).json(result);
//   } catch (err) {
//     res.status(500).json(err);
//   }
// });

// // Save a Recipe
// router.put("/", async (req, res) => {
//   const recipe = await RecipesModel.findById(req.body.recipeID);
//   const user = await UserModel.findById(req.body.userID);
//   try {
//     user.savedRecipes.push(recipe);
//     await user.save();
//     res.status(201).json({ savedRecipes: user.savedRecipes });
//   } catch (err) {
//     res.status(500).json(err);
//   }
// });

// // Get id of saved recipes
// router.get("/savedRecipes/ids/:userId", async (req, res) => {
//   try {
//     const user = await UserModel.findById(req.params.userId);
//     res.status(201).json({ savedRecipes: user?.savedRecipes });
//   } catch (err) {
//     console.log(err);
//     res.status(500).json(err);
//   }
// });

// // Get saved recipes
// router.get("/savedRecipes/:userId", async (req, res) => {
//   try {
//     const user = await UserModel.findById(req.params.userId);
//     const savedRecipes = await RecipesModel.find({
//       _id: { $in: user.savedRecipes },
//     });

//     console.log(savedRecipes);
//     res.status(201).json({ savedRecipes });
//   } catch (err) {
//     console.log(err);
//     res.status(500).json(err);
//   }
// });

// export { router as recipesRouter };



// {
//     "title": "Vegan Chickpea Curry",
//     "description": "A delicious and nutritious vegan chickpea curry.",
//     "ingredients": [
//       "1 can of chickpeas, drained and rinsed",
//       "1 onion, chopped",
//       "2 cloves of garlic, minced",
//       "1 can of coconut milk",
//       "1 cup of spinach, chopped",
//       "1 tablespoon of curry powder",
//       "1 teaspoon of turmeric",
//       "Salt and pepper to taste",
//       "2 tablespoons of olive oil"
//     ],
//     "instructions": "1. Heat olive oil in a pan. \n2. Add chopped onion and minced garlic, sauté until fragrant. \n3. Stir in curry powder and turmeric. \n4. Add chickpeas, coconut milk, and spinach. \n5. Simmer until the curry thickens and the flavors meld. \n6. Season with salt and pepper to taste. \n7. Serve over rice or with your favorite bread.",
//     "imageUrl": "https://www.gimmesomeoven.com/wp-content/uploads/2022/09/Chickpea-Curry-8.jpg"
//   }