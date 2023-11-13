import express from 'express';
import mongoose from 'mongoose';
import {
//   createRecipe,
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

router.get('/recipes', async (req, res) => {
    try {
        const recipes = await RecipeModel.find();
        res.status(200).json(recipes);
      } catch (error) {
        console.log(error);
        res.status(500).json({ message: 'Server Error' });
      }

});




router.get('/recipes/:id', getRecipeById);


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

// // Create a new recipe
// router.post("/", verifyToken, async (req, res) => {
//   const recipe = new RecipesModel({
//     _id: new mongoose.Types.ObjectId(),
//     name: req.body.name,
//     image: req.body.image,
//     ingredients: req.body.ingredients,
//     instructions: req.body.instructions,
//     imageUrl: req.body.imageUrl,
//     cookingTime: req.body.cookingTime,
//     userOwner: req.body.userOwner,
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