import React, { useState } from "react";

function NewTaskForm({onTaskFormSubmit, categories}) {
  const [text, setText] = useState("");
  const [category, setCategory] = useState("");

  const categoryOptions = categories.map(category => {
    return (
      <option key={category}>{category}</option>
    )
  })

  function handleSubmit(e) {
    e.preventDefault();
    const formData = {
      text: text,
      category: category
    }
    onTaskFormSubmit(formData)
    setText('')
    setCategory('code');
  }

  return (
    <form className="new-task-form" onSubmit={handleSubmit}>
      <label>
        Details
        <input 
          type="text" 
          name="text" 
          onChange={(e)=> setText(e.target.value)}
        />
      </label>

      <label>
        Category
        <select name="category" 
          value={category} 
          onChange={(e) => setCategory(e.target.value)}>
            {categoryOptions}
          {/* render <option> elements for each category here */}
        </select>
      </label>
      <input type="submit" value="Add task" />
    </form>
  );
}

export default NewTaskForm;
