
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
// import BackgroundVideo from '../components/BackgroundVideo';

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
    width: '40%', // Adjust the width as needed
    marginTop: '50px', // Move the element down by 2 cm
    marginBottom: '20px', // Add margin for spacing
    // borderBottom: '2px solid green', // Add a thin green line under the text
    
  };

  const noframeStyle = {
    width: '150%', // Adjust the width as needed
    marginTop: '-10px', // Move the element down or up
    marginLeft: '-1cm', // Move the image one cm to the right
    
    marginBottom: '10px', // Add margin for spacing
    // borderBottom: '2px solid green', // Add a thin green line under the text
    
  };

  const recipesStyle = {
    marginLeft: '3cm', // Move the image one cm to the right
    width: '40%',    // Set the width to make it bigger
    marginTop: '30px', // Move the element down or up
  };

  

  // const containerStyle = {
  //   maxWidth: '800px',
  //   margin: 'auto',
  //   display: 'flex',
  //   flexDirection: 'column',
  //   justifyContent: 'center',
  //   alignItems: 'center',
  // };

  return (
    <div style={{ 
      maxWidth: '800px',
      margin: 'auto'
        }}>
    
    {/* Images jpgs */}
       <div style={{ textAlign: 'center' }}>
        <img src="/signature.jpg" alt="signature" style={signatureStyle} />
      </div>
      <div className="flex-container" style={{ textAlign: 'center' }}>
      <img src="/noframe.png" alt="noframe" style={noframeStyle} />
      </div>
      {/* Featured Recipes */}
      <div style={{ textAlign: 'center' }}>
        <img src="recipes.jpg" alt="recipes" style={recipesStyle} />
      </div>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <ul className="recipe-container">
          {recipes.map(recipe => (
            <li key={recipe._id} className="recipe-card">
              <h3>{recipe.title}</h3>
              <Link to={`/recipe/${recipe._id}`}>
                <img src={recipe.imageUrl} alt={recipe.title} />
              </Link>
            </li>
          ))}
        </ul>
        
      )}
      {/* <div>{ <BackgroundVideo/> }</div> */}
    </div>
  );
};

export default Home;
