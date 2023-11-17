
// import React, { useState, useEffect } from 'react';
// import { Link } from 'react-router-dom'; // Import Link from react-router-dom
// import axios from 'axios';

// const Home = () => {
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
//     <div>
//       <h2>Featured Recipes</h2>
//       {loading ? (
//         <p>Loading...</p>
//       ) : (
//         <ul>
//           {recipes.map(recipe => (
//             <li key={recipe._id} className="recipe-container">
//               {/* Add a Link to the detailed recipe page using the recipe's ID */}
//               <Link to={`/recipe/${recipe._id}`}>
//                 <img
//                   src={recipe.imageUrl}
//                   alt={recipe.title}
//                   className="recipe-image"
//                 />
//               </Link>
//               <h3>{recipe.title}</h3>
//             </li>
//           ))}
//         </ul>
//       )}
//     </div>
//   );
// };

// export default Home;



// import React from 'react';

// const Home = () => {
//   return (
//     <div>
//       <h1>Welcome to the Home Page!</h1>
//       {/* Add your home page content here */}
//     </div>
//   );
// };

// export default Home;



// Home.jsx
// Home.jsx
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import Navbar from '../components/Navbar';

const Home = () => {
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

  const signatureStyle = {
    width: '40%',
    marginTop: '50px',
    marginBottom: '20px',
    fontFamily: 'Finger Paint, sans-serif', // Apply the Finger Paint font
  };

  const noframeStyle = {
    width: '150%',
    marginTop: '-10px',
    marginLeft: '-1cm',
    marginBottom: '10px',
  };

  const recipesStyle = {
    width: '100%',
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    marginTop: '30px',
  };

  const recipeCardStyle = {
    width: '30%',
    marginBottom: '20px',
    border: '2px solid green',
    borderRadius: '8px',
    overflow: 'hidden',
  };

  const imageStyle = {
    width: '100%',
    height: 'auto',
    borderRadius: '8px 8px 0 0',
  };

  const textContainerStyle = {
    padding: '15px',
  };

  return (
    <div style={{ maxWidth: '800px', margin: 'auto' }}>
      {/* Font link for Finger Paint */}
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin />
      <link href="https://fonts.googleapis.com/css2?family=Finger+Paint&display=swap" rel="stylesheet" />

      {/* Images jpgs */}
      <div style={{ textAlign: 'center' }}>
        <img src="/signature.jpg" alt="signature" style={signatureStyle} />
      </div>
      <div className="flex-container" style={{ textAlign: 'center' }}>
        <img src="/noframe.png" alt="noframe" style={noframeStyle} />
      </div>
      {/* Featured Recipes */}
      <div style={recipesStyle}>
        {loading ? (
          <p>Loading...</p>
        ) : (
          recipes.map(recipe => (
            <div key={recipe._id} style={recipeCardStyle}>
              <Link to={`/recipe/${recipe._id}`}>
                <img src={recipe.imageUrl} alt={recipe.title} style={imageStyle} />
              </Link>
              <div style={textContainerStyle}>
                <h3>{recipe.title}</h3>
                <p>{recipe.description}</p>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default Home;
