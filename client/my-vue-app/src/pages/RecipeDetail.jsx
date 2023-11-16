// RecipeDetail.jsx
import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

const RecipeDetail = () => {
  const { id } = useParams(); // Get the recipe ID from the URL parameters
  const [recipe, setRecipe] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchRecipeDetail = async () => {
      try {
        const response = await axios.get(`http://localhost:3003/recipes/${id}`);
        setRecipe(response.data);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching recipe detail:', error);
        setLoading(false);
      }
    };

    fetchRecipeDetail();
  }, [id]); // Include id in the dependency array to re-fetch when it changes

  return (
    <div>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <div>
          <h2>{recipe.title}</h2>
          <p>{recipe.description}</p>
          <img src={recipe.imageUrl} alt={recipe.title} style={{ maxWidth: '100%' }} />
          <ul>
            {recipe.ingredients.map((ingredient, index) => (
              <li key={index}>{ingredient}</li>
            ))}
          </ul>
          <p>{recipe.instructions}</p>
        </div>
      )}
    </div>
  );
};

export default RecipeDetail;
