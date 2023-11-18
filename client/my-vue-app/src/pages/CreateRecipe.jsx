
import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useCookies } from "react-cookie";


//functional component..define UI components//Uses the useCookies hook to get the value of the access_token cookie. 
const CreateRecipe = () => {
  const [cookies, _] = useCookies(["access_token"]); 
  const navigate = useNavigate(); //react-router-dom library. It allows navigation to different pages

  const [recipe, setRecipe] = useState({ //The state includes various properties such as name, 
    title: "",
    description: "",
    ingredients: [],
    instructions: "",
    imageUrl: "",
  });
//Event Handlers:
  const handleChange = (event) => {//Updates the recipe state when any input field's value changes.
    const { name, value } = event.target;
    setRecipe({ ...recipe, [name]: value });
  };

  const handleIngredientChange = (event, index) => { // Updates the value of a specific ingredient in the ingredients array.
    const { value } = event.target;
    const ingredients = [...recipe.ingredients];
    ingredients[index] = value;
    setRecipe({ ...recipe, ingredients });
  };

  const handleAddIngredient = () => {//Adds an empty ingredient to the ingredients array.
    setRecipe((prevRecipe) => ({
      ...prevRecipe,
      ingredients: [...prevRecipe.ingredients, ""],
    }));
  };
//Form Submission:
//sends POST request with the recipe details using Axios, and navigates to the home page upon successful submission.
// stringify into json
  const handleSubmit = async (event) => {
    event.preventDefault();
    console.log(recipe)
    try {
      await axios.post(
        "http://localhost:3003/recipes",
        recipe,
        {
          headers: { "Content-Type": "application/json" },// no auth...
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
      <h2 style={{ color: "#4caf50" }}>Create Recipe</h2>
      <form
        onSubmit={handleSubmit}
        style={{ maxWidth: "500px", margin: "auto" }}
      >
        <label htmlFor="title">Title</label>
        <input
          type="text"
          id="title"
          name="title"
          value={recipe.title}
          onChange={handleChange}
          style={{ width: "100%", marginBottom: "15px", padding: "8px" }}
        />
        <label htmlFor="description">Description</label>
        <textarea
          id="description"
          name="description"
          value={recipe.description}
          onChange={handleChange}
          style={{ width: "100%", marginBottom: "15px", padding: "8px" }}
        ></textarea>
        <label htmlFor="ingredients"></label>
        {recipe.ingredients.map((ingredient, index) => (
          <input
            key={index}
            type="text"
            name="ingredients"
            value={ingredient}
            onChange={(event) => handleIngredientChange(event, index)}
            style={{ width: "100%", marginBottom: "10px", padding: "8px" }}
          />
        ))}
        <button
          type="button"
          onClick={handleAddIngredient}
          style={{
            backgroundColor: "#4caf50",
            color: "white",
            padding: "8px 12px",
            marginBottom: "15px",
          }}
        >
          Press this Button to Add Ingredient
        </button>
        <label htmlFor="instructions"></label>
        <textarea
          id="instructions"
          name="instructions"
          value={recipe.instructions}
          onChange={handleChange}
          style={{ width: "100%", marginBottom: "15px", padding: "8px" }}
        ></textarea>
        <label htmlFor="imageUrl">Image URL</label>
        <input
          type="text"
          id="imageUrl"
          name="imageUrl"
          value={recipe.imageUrl}
          onChange={handleChange}
          style={{ width: "100%", marginBottom: "15px", padding: "8px" }}
        />
        <button
          type="submit"
          style={{ backgroundColor: "#4caf50", color: "white", padding: "10px 15px" }}
        >
          Create Recipe
        </button>
      </form>
    </div>
  );
};

export default CreateRecipe;
