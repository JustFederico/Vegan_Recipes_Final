import mongoose from "mongoose";

const RecipeSchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: { type: String, required: true },
  ingredients: { type: [String], required: true },
  instructions: { type: String, required: true },
  imageUrl: { type: String }
 

  //associate recipes with users
  //reference the User model
//   createdBy: { type: mongoose.Schema.Types.ObjectId, ref: "users" },
});

export const RecipeModel = mongoose.model("recipes", RecipeSchema);


// const recipeExample = {
//     title: "Vegan Pasta",
//     description: "A delicious vegan pasta recipe",
//     ingredients: ["whole wheat pasta", "tomatoes", "spinach", "olive oil", "garlic"],
//     instructions: "Cook the pasta, sauté the vegetables, mix together, and serve!",
//     imageUrl: "https://www.eatingwell.com/thmb/1ftLJSo86kXrNASYj4FIyDd1n84=/750x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/5492950-efa6e9b10295417ea4a0b1a3edb3bac9.jpg",
//     createdBy: /* User reference */,
//   };