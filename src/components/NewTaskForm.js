import React, { useState } from "react";

function NewTaskForm({categories, onTaskSubmit}) {
  const [text, setText] = useState('')
  const [category, setCategory] = useState('All')

  const categoryOptions = categories.map(category =>{
    return <option 
                key= {category}> {category} 
            </option>
  })

  function handleCategoryChange(e){
      setCategory(e.target.value)
  }


  function handleTaskChange(e){
    setText(e.target.value)
  }

  function handleSubmit(e){
    e.preventDefault()
    onTaskFormSubmit({text, category})
  }
  
  return (
    <form className="new-task-form" onSubmit={handleSubmit}>
      <label>
        Details
        <input 
            type="text" 
            name="text" 
            value={text}
            onChange={handleTaskChange} />
      </label>
      <label>
        Category
        <select name="category"
                value={category}
                onChange={handleCategoryChange}>
          {categoryOptions}
        </select>
      </label>
      <input type="submit" value="Add task" />
    </form>
  );
}

export default NewTaskForm;
