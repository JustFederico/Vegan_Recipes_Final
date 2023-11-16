// import { Link } from 'react-router-dom';

// // when clicking on "home link" navigate to HOMEPAGE

// export const Navbar = () => {
//     return (
//       <div className='navbar'>
//         <Link to="/"> Home</Link>
//         <Link to="/"> Home</Link>
//         <Link to="/"> Home</Link>
//         <Link to="/"> Home</Link>
//     </div>
//     );
// };
  
//   export default Home;
  

// import React from "react";
// import { Link, useNavigate } from "react-router-dom";
// import { useCookies } from "react-cookie";

// export const Navbar = () => {
//   const [cookies, setCookies] = useCookies(["access_token"]);
//   const navigate = useNavigate();

//   const logout = () => {
//     setCookies("access_token", "");
//     window.localStorage.clear();
//     navigate("/auth");
//   };
//   return (
//     <div className="navbar">
//       <Link to="/">Home</Link>
//       <Link to="/create-recipe">Create Recipe</Link>
//       <Link to="/saved-recipes">Saved Recipes</Link>
//       {!cookies.access_token ? (
//         <Link to="/auth">Login/Register</Link>
//       ) : (
//         <button onClick={logout}> Logout </button>
//       )}
//     </div>
//   );
// };
// export default Navbar;

import React from 'react';
import { NavLink } from 'react-router-dom';

const navbarStyle = {
  background: 'linear-gradient(to right, green, white)',
  position: 'sticky',
  top: '0',
  zIndex: '1000',
};

const activeLinkStyle = {
  color: 'red', // Change the styling for active links as needed
};

export const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light" style={navbarStyle}>
      <div className="container">
        <NavLink className="navbar-brand" to="/" activeStyle={activeLinkStyle}>
          Vegan Life
        </NavLink>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ml-auto">
            <li className="nav-item">
              <NavLink className="nav-link" to="/" activeStyle={activeLinkStyle}>
                Home
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/auth" activeStyle={activeLinkStyle}>
                Auth
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/create-recipe" activeStyle={activeLinkStyle}>
                Create Recipe
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/saved-recipes" activeStyle={activeLinkStyle}>
                Saved Recipes
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

