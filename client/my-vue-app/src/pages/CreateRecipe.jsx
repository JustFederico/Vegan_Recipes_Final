
// import React from 'react';

// const CreateRecipe = () => {
//   return (
//     <div>
//       <h1>Create Recipes</h1>
//       {/* Add your authentication page content here */}
//     </div>
//   );
// };

// export default CreateRecipe;

//----------------------------------------------------------------------------------------------

import React, { useState } from "react";
import axios from "axios";
import { useGetUserID } from "../hooks/useGetUserID";
import { useNavigate } from "react-router-dom";
import { useCookies } from "react-cookie";

export const CreateRecipe = () => {
  const userID = useGetUserID();
  const [cookies, _] = useCookies(["access_token"]);
  const [recipe, setRecipe] = useState({
    name: "",
    description: "",
    ingredients: [],
    instructions: "",
    imageUrl: "",
    cookingTime: 0,
    userOwner: userID,
  });

  const navigate = useNavigate();

  const handleChange = (event) => {
    const { name, value } = event.target;
    setRecipe({ ...recipe, [name]: value });
  };

  const handleIngredientChange = (event, index) => {
    const { value } = event.target;
    const ingredients = [...recipe.ingredients];
    ingredients[index] = value;
    setRecipe({ ...recipe, ingredients });
  };

  const handleAddIngredient = () => {
    const ingredients = [...recipe.ingredients, ""];
    setRecipe({ ...recipe, ingredients });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      await axios.post(
        "http://localhost:3003/recipes",
        { ...recipe },
        {
          headers: { authorization: cookies.access_token },
        }
      );

      alert("Recipe Created");
      navigate("/");
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="create-recipe">
      <h2>Create Recipe</h2>
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">Name</label>
        <input
          type="text"
          id="name"
          name="name"
          value={recipe.name}
          onChange={handleChange}
        />
        <label htmlFor="description">Description</label>
        <textarea
          id="description"
          name="description"
          value={recipe.description}
          onChange={handleChange}
        ></textarea>
        <label htmlFor="ingredients">Ingredients</label>
        {recipe.ingredients.map((ingredient, index) => (
          <input
            key={index}
            type="text"
            name="ingredients"
            value={ingredient}
            onChange={(event) => handleIngredientChange(event, index)}
          />
        ))}
        <button type="button" onClick={handleAddIngredient}>
          Add Ingredient
        </button>
        <label htmlFor="instructions">Instructions</label>
        <textarea
          id="instructions"
          name="instructions"
          value={recipe.instructions}
          onChange={handleChange}
        ></textarea>
        <label htmlFor="imageUrl">Image URL</label>
        <input
          type="text"
          id="imageUrl"
          name="imageUrl"
          value={recipe.imageUrl}
          onChange={handleChange}
        />
        <label htmlFor="cookingTime">Cooking Time (minutes)</label>
        <input
          type="number"
          id="cookingTime"
          name="cookingTime"
          value={recipe.cookingTime}
          onChange={handleChange}
        />
        <button type="submit">Create Recipe</button>
      </form>
    </div>
  );
};

export default CreateRecipe;


//-----------------------------------------------------------------------------------------------

// client/my-vue-app/src/pages/CreateRecipe.jsx
// import React, { useState } from 'react';
// import axios from 'axios';

// const CreateRecipe = () => {
//   const [recipeData, setRecipeData] = useState({ 
//     title: '',
//     description: '',
//     ingredients: [],
//     instructions: '',
//     imageUrl: '',
//     createdBy: /* User ID or reference */,
//   });

//   const handleInputChange = (e) => {
//     setRecipeData({ ...recipeData, [e.target.name]: e.target.value });
//   };

//   const handleIngredientChange = (e, index) => {
//     const updatedIngredients = [...recipeData.ingredients];
//     updatedIngredients[index] = e.target.value;
//     setRecipeData({ ...recipeData, ingredients: updatedIngredients });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     try {
//       // Make a request to the backend to create a new recipe
//       const response = await axios.post('/api/recipes', recipeData);
//       console.log('New Recipe Created:', response.data);

//       // Optionally, you can redirect to the saved recipes page or take other actions
//     } catch (error) {
//       console.error('Error creating recipe:', error.response.data.message);
//     }
//   };

//   return (
//     <div>
//       <h1>Create a New Recipe</h1>
//       <form onSubmit={handleSubmit}>
//         {/* Include form fields for title, description, ingredients, instructions, imageUrl */}
//         <label>Title:</label>
//         <input type="text" name="title" value={recipeData.title} onChange={handleInputChange} />

//         {/* ... other form fields ... */}

//         <button type="submit">Create Recipe</button>
//       </form>
//     </div>
//   );
// };

// export default CreateRecipe;

