// NewTaskForm.js
import React, { useState } from "react";

function NewTaskForm({ categories }) {
  const [taskText, setTaskText] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("");

  const handleTaskTextChange = (event) => {
    setTaskText(event.target.value);
  };

  const handleCategoryChange = (event) => {
    setSelectedCategory(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Add code to handle adding a new task here using the taskText and selectedCategory state
    setTaskText("");
    setSelectedCategory("");
  };

  return (
    <form className="new-task-form" onSubmit={handleSubmit}>
      <label>
        Details
        <input type="text" name="text" value={taskText} onChange={handleTaskTextChange} />
      </label>
      <label>
        Category
        <select name="category" value={selectedCategory} onChange={handleCategoryChange}>
          <option value="">Select a category</option>
          {categories.map((category) => (
            <option key={category} value={category}>
              {category}
            </option>
          ))}
        </select>
      </label>
      <input type="submit" value="Add task" />
    </form>
  );
}

export default NewTaskForm;
