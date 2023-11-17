import React from 'react';

const footerStyle = {
  background: 'linear-gradient(to right, #00cc44, #ffffff)',
  padding: '20px',
  textAlign: 'center',
  color: 'white', // Adjust text color as needed
};

const Footer = () => {
  return (
    <footer style={footerStyle}>
      <p>&copy; 2023 Vegan Life. All rights reserved.</p>
    </footer>
  );
};

export default Footer;
