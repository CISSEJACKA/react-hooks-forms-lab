import React, { useState } from 'react';
import { v4 as uuid } from 'uuid'; // Import uuid function to generate unique IDs

function ItemForm({ onItemFormSubmit }) {
  const [itemName, setItemName] = useState('');
  const [itemCategory, setItemCategory] = useState('Produce'); // Initial value of "Produce"

  const handleNameChange = (event) => {
    setItemName(event.target.value);
  };

  const handleCategoryChange = (event) => {
    setItemCategory(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault(); // Prevent default form submission behavior
    const newItem = {
      id: uuid(), // Generate a unique ID for the new item
      name: itemName,
      category: itemCategory,
    };
    onItemFormSubmit(newItem); // Notify parent about the new item
    // Clear form fields after submission
    setItemName('');
    setItemCategory('Produce');
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Item Name"
        value={itemName}
        onChange={handleNameChange}
      />
      <select value={itemCategory} onChange={handleCategoryChange}>
        <option value="Produce">Produce</option>
        <option value="Dairy">Dairy</option>
        {/* Add more categories as needed */}
      </select>
      <button type="submit">Add Item</button>
    </form>
  );
}

export default ItemForm;


