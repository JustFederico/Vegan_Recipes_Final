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

const customFontStyle = {
  fontFamily: 'Finger Paint, sans-serif', // Correct the property name to fontFamily
  color: 'lightgreen', // Set the font color to light green
};

const navbarStyle = {
  background: 'linear-gradient(to right, white, white)',
  position: 'sticky',
  top: '0',
  zIndex: '1000',
  // fontFamily: 'Delicious Handrawn, sans-serif', // Apply the Delicious Handrawn font
  textAlign: 'center', // Center the Navbar text
  padding: '10px', // Add padding for spacing
  display: 'flex', // Use flex container
  alignItems: 'center', // Center items vertically in the flex <container></container>
};

const logoStyle = {
  width: '500px', // Set the width of your logo
  marginRight: '10px', // Add margin for spacing
  
  display: 'flex',
  flexWrap: 'wrap',
  marginTop: '22px',
  // justifyContent: 'space-around',
  // marginTop: '30px',
};

const activeLinkStyle = { 
  
};



export const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light" style={{ ...navbarStyle, ...customFontStyle }}>
      <div className="container">
      <img src="/public/navbarUntitled-1.png" alt="Logo" style={logoStyle} />
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
                Become a Member
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/create-recipe" activeStyle={activeLinkStyle}>
                Create Recipe
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/saved-recipes" activeStyle={activeLinkStyle}>
                Recipes
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

