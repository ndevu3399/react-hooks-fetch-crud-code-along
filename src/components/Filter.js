// src/components/Filter.js
import React from 'react';

function Filter({ category, onCategoryChange }) {
  return (
    <div>
      <select value={category} onChange={(e) => onCategoryChange(e.target.value)}>
        <option value="All">All</option>
        <option value="Produce">Produce</option>
        <option value="Dairy">Dairy</option>
        <option value="Meat">Meat</option>
      </select>
    </div>
  );
}

export default Filter;
