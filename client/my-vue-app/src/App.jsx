import React from 'react';
import { Routes, Route } from 'react-router-dom';

import Home from './pages/Home';
import Auth from './pages/Auth';
import CreateRecipe from './pages/CreateRecipe';
import SavedRecipes from './pages/SavedRecipes';

function App() {
  return (
    
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/auth" element={<Auth />} />
        <Route path="/create-recipe" element={<CreateRecipe />} />
        <Route path="/saved-recipes" element={<SavedRecipes />} />
      </Routes>
   
  );
}

export default App;