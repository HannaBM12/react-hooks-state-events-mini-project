import React from "react";


function CategoryFilter({categories, setSelectedCategory}) {
  // const[selectedCategory, setSelectedCategory] = useState("")

  const categoryLists = categories.map(category => {
    return (

        <button onClick={handleClick}
          key={category} 
          className=""
          value={category}> {category} </button>
    
      )

      function handleClick(e){
        setSelectedCategory(e.target.value)
        e.target.className = "selected"
      }
  })
  return (
    <div className="categories">
      <h5>Category filters</h5>
      {categoryLists}
      
    </div>
  );
}

export default CategoryFilter;
