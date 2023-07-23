// CategoryFilter.js
import React from "react";

function CategoryFilter({ categories }) {
  const handleFilterClick = (category) => {
    // Add code to handle filtering tasks by category here
  };

  return (
    <div className="categories">
      <h5>Category filters</h5>
      {categories.map((category) => (
        <button key={category} onClick={() => handleFilterClick(category)}>
          {category}
        </button>
      ))}
    </div>
  );
}

export default CategoryFilter;
