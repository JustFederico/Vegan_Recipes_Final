
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
import React, { useState, useEffect } from 'react';
import axios from 'axios';


const SavedRecipes = () => {
  const [recipes, setRecipes] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchRecipes = async () => {
      try {
        const response = await axios.get('http://localhost:3003/recipes/:id');
        setRecipes(response.data);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching recipes:', error);
        setLoading(false);
      }
    };
    console.log(recipes)

    fetchRecipes();
  }, []);

  
  return (
    <div>
      <h2>Saved Recipes</h2>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <ul>
          {recipes.map(recipe => (
            <li key={recipe._id}>
              <h3>{recipe.title}</h3>
              <p>{recipe.description}</p>
              <img src={recipe.imageUrl} alt={recipe.title} style={{ maxWidth: '100%' }} />
              <ul>
                {recipe.ingredients.map((ingredient, index) => (
                  <li key={index}>{ingredient}</li>
                ))}
              </ul>
              <p>{recipe.instructions}</p>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};


export default SavedRecipes;
