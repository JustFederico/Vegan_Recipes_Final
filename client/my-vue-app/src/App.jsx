// import React from 'react';
// import {Routes, Route } from 'react-router-dom';

// import Navbar from './components/navbar'
// import Home from './pages/Home';
// import Auth from './pages/Auth';
// import CreateRecipe from './pages/CreateRecipe';
// import SavedRecipes from './pages/SavedRecipes';

// import './styles.css';
// import './index.css'

// // import { Login, Register } from './pages/Auth'; 

// // import { Home, Auth, CreateRecipe, SavedRecipes, Login, Register } from './pages';



// function App() {
//   return (
    
//       <Routes>
//         <Route path="/" element={<Home />} />
        
//         <Route path="/auth" element={<Auth />} />
//         <Route path="/create-recipe" element={<CreateRecipe />} />
//         <Route path="/saved-recipes" element={<SavedRecipes />} />
//       </Routes>
   
//   );
// }

// export default App;

//----------------------------------------

// App.jsx
// import React from 'react';
// import { Routes, Route } from 'react-router-dom';

// import Navbar from './components/navbar';
// import Home from './pages/Home';
// import Auth from './pages/Auth';
// import CreateRecipe from './pages/CreateRecipe';
// import SavedRecipes from './pages/SavedRecipes';
// import RecipeDetail from './pages/RecipeDetail'; // Import RecipeDetail

// import './styles.css';
// import './index.css';

// function App() {
//   return (
//     <Routes>
//       <Route path="/" element={<Home />} />
//       <Route path="/auth" element={<Auth />} />
//       <Route path="/create-recipe" element={<CreateRecipe />} />
//       <Route path="/saved-recipes" element={<SavedRecipes />} />
//       <Route path="/recipe/:id" element={<RecipeDetail />} /> {/* New route for detailed recipe */}
//     </Routes>
//   );
// }

// export default App;


// App.jsx
import React from 'react';
import { Routes, Route } from 'react-router-dom';


import Navbar from './components/Navbar.jsx';
import Home from './pages/Home';
import Auth from './pages/Auth';
import CreateRecipe from './pages/CreateRecipe';
import SavedRecipes from './pages/SavedRecipes';
import RecipeDetail from './pages/RecipeDetail'; // Import RecipeDetail

import './styles.css';
import './index.css';
import './App.css';




function App() {
  return (
    <div>
      <Navbar />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/auth" element={<Auth />} />
      <Route path="/create-recipe" element={<CreateRecipe />} />
      <Route path="/saved-recipes" element={<SavedRecipes />} />
      <Route path="/recipe/:id" element={<RecipeDetail />} /> {/* New route for detailed recipe */}
    </Routes>
    </div>
  );
}

export default App;