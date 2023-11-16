
// import React from 'react';

// const SavedRecipes = () => {
//   return (
//     <div>
//       <h1>Save Recipes</h1>
//       {/* Add your authentication page content here */}
//     </div>
//   );
// };

// export default SavedRecipes;


// pages/SavedRecipes.jsx

//----------------------------------------------------------------------
import React, { useState, useEffect } from 'react';
import axios from 'axios';

const containerStyle = {
  maxWidth: '800px',
  margin: 'auto',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
};

const SavedRecipes = () => {
  const [recipes, setRecipes] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchRecipes = async () => {
      try {
        const response = await axios.get('http://localhost:3003/recipes');
        setRecipes(response.data);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching recipes:', error);
        setLoading(false);
      }
    };

    fetchRecipes();
  }, []);

  return (
    <div style={containerStyle}>
      <h2>Saved Recipes</h2>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <ul>
          {recipes.map(recipe => (
            <li key={recipe._id} className="recipe-container">
              {/* Add a container with a green border around each recipe */}
              <div className="recipe-card">
                <h3>{recipe.title}</h3>
                <p>{recipe.description}</p>
                <img src={recipe.imageUrl} alt={recipe.title} className="recipe-image" />
                <ul>
                  {recipe.ingredients.map((ingredient, index) => (
                    <li key={index}>{ingredient}</li>
                  ))}
                </ul>
                <p>{recipe.instructions}</p>
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default SavedRecipes;


// http://localhost:5173/saved-recipes
//---------------------------------------------------------------------------------

// import React, { useEffect, useState } from "react";
// import { useGetUserID } from "../hooks/useGetUserID";
// import axios from "axios";

// export const SavedRecipes = () => {
//   const [savedRecipes, setSavedRecipes] = useState([]);
//   const userID = useGetUserID();

//   useEffect(() => {
//     const fetchSavedRecipes = async () => {
//       try {
//         const response = await axios.get(
//           `http://localhost:3003/recipes/savedRecipes/${userID}`
//         );
//         setSavedRecipes(response.data.savedRecipes);
//       } catch (err) {
//         console.log(err);
//       }
//     };

//     fetchSavedRecipes();
//   }, []);
//   return (
//     <div>
//       <h1>Saved Recipes</h1>
//       <ul>
//         {savedRecipes.map((recipe) => (
//           <li key={recipe._id}>
//             <div>
//               <h2>{recipe.name}</h2>
//             </div>
//             <p>{recipe.description}</p>
//             <img src={recipe.imageUrl} alt={recipe.name} />
//             <p>Cooking Time: {recipe.cookingTime} minutes</p>
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// };



// --------------------------------------------


