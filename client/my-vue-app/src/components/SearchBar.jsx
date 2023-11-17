import React from 'react';

const searchBarStyle = {
  background: 'white',
  textAlign: 'center',
  padding: '1px', // Adjust as needed
};

const inputStyle = {
  padding: '5px',
  borderRadius: '1px',
  border: '1px solid green', // Green border
  margin: '10 10px', // Adjust as needed for indentation
};

const buttonStyle = {
  padding: '5px 10px',
  borderRadius: '5px',
  border: '2px solid green', // Green border
  cursor: 'pointer',
};

const SearchBar = () => {
  const handleSearch = () => {
    // Implement your search logic here
    console.log('Search button clicked');
  };

  return (
    <div style={searchBarStyle}>
      <input type="text" placeholder="Search..." style={inputStyle} />
      <button onClick={handleSearch} style={buttonStyle}>
        Search
      </button>
    </div>
  );
};

export default SearchBar;
