// src/components/Filter.js

import React, { useState } from 'react';

function Filter({ items, onCategoryChange, onSearchChange }) {
  const [searchText, setSearchText] = useState('');

  const handleSearchChange = (event) => {
    setSearchText(event.target.value);
    onSearchChange(event.target.value);
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Search..."
        value={searchText}
        onChange={handleSearchChange}
      />
      <select onChange={onCategoryChange}>
        <option value="All">All</option>
        <option value="Fruits">Fruits</option>
        <option value="Vegetables">Vegetables</option>
        <option value="Dairy">Dairy</option>
      </select>
    </div>
  );
}

export default Filter;


