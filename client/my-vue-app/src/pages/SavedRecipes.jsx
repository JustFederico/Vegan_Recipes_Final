
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
// import React, { useState, useEffect } from 'react';
// import axios from 'axios';

// const containerStyle = {
//   maxWidth: '800px',
//   margin: 'auto',
//   display: 'flex',
//   flexDirection: 'column',
//   justifyContent: 'center',
//   alignItems: 'center',
// };

// const SavedRecipes = () => {
//   const [recipes, setRecipes] = useState([]);
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     const fetchRecipes = async () => {
//       try {
//         const response = await axios.get('http://localhost:3003/recipes');
//         setRecipes(response.data);
//         setLoading(false);
//       } catch (error) {
//         console.error('Error fetching recipes:', error);
//         setLoading(false);
//       }
//     };

//     fetchRecipes();
//   }, []);

//   return (
//     <div style={containerStyle}>
//       <h2>Saved Recipes</h2>
//       {loading ? (
//         <p>Loading...</p>
//       ) : (
//         <ul>
//           {recipes.map(recipe => (
//             <li key={recipe._id} className="recipe-container">
//               {/* Add a container with a green border around each recipe */}
//               <div className="recipe-card">
//                 <h3>{recipe.title}</h3>
//                 <p>{recipe.description}</p>
//                 <img src={recipe.imageUrl} alt={recipe.title} className="recipe-image" />
//                 <ul>
//                   {recipe.ingredients.map((ingredient, index) => (
//                     <li key={index}>{ingredient}</li>
//                   ))}
//                 </ul>
//                 <p>{recipe.instructions}</p>
//               </div>
//             </li>
//           ))}
//         </ul>
//       )}
//     </div>
//   );
// };

// export default SavedRecipes;


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
import React, { useState, useEffect } from 'react';
import axios from 'axios';

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

  // Font link for Finger Paint
  const fingerPaintFontLink = 'https://fonts.googleapis.com/css2?family=Finger+Paint&display=swap';
  const customFontStyle = {
    fontFamily: 'Finger Paint, sans-serif',
  };

  const containerStyle = {
    padding: '200px',
    background: 'linear-gradient(to right, #aed581, #ffffff)',
    borderRadius: '15px',
    boxShadow: '0 0 20px rgba(0, 0, 0, 0.1)',
    maxWidth: '800px',
    margin: '0 auto',
  };

  const recipeCardStyle = {
    border: '2px solid #4caf50',
    padding: '20px',
    borderRadius: '10px',
    marginBottom: '20px',
    background: '#ffffff',
    boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',
  };

  const imageStyle = {
    maxWidth: '100%',
    height: 'auto',
    borderRadius: '8px',
    marginBottom: '10px',
    boxShadow: '0 0 8px rgba(0, 0, 0, 0.1)',
  };

  const titleStyle = {
    ...customFontStyle, // Apply Finger Paint font
    color: '#4caf50',
    fontSize: '1.5em',
    marginBottom: '10px',
  };

  const descriptionStyle = {
    ...customFontStyle, // Apply Finger Paint font
    color: '#333',
    marginBottom: '10px',
  };

  const ingredientsListStyle = {
    ...customFontStyle, // Apply Finger Paint font
    color: '#555',
    listStyleType: 'disc',
    paddingLeft: '20px',
  };

  const instructionStyle = {
    ...customFontStyle, // Apply Finger Paint font
    color: '#555',
  };

  return (
    <div style={containerStyle}>
      {/* Font link for Finger Paint */}
      <link rel="stylesheet" href={fingerPaintFontLink} />

      <h2 style={{ textAlign: 'center', color: '#4caf50' }}>Saved Recipes</h2>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <ul>
          {recipes.map(recipe => (
            <li key={recipe._id} style={recipeCardStyle}>
              <img src={recipe.imageUrl} alt={recipe.title} style={imageStyle} />
              <div>
                <h3 style={titleStyle}>{recipe.title}</h3>
                <p style={descriptionStyle}>{recipe.description}</p>
                <ul style={ingredientsListStyle}>
                  {recipe.ingredients.map((ingredient, index) => (
                    <li key={index}>{ingredient}</li>
                  ))}
                </ul>
                <p style={instructionStyle}>{recipe.instructions}</p>
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default SavedRecipes;
