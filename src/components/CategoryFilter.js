import React, {useState} from "react";

// const allCategories = ["All", ...tasks.map(task=> task.category)]
// console.log(allCategories);

function CategoryFilter({categories}) {
  const[isSelected, setIsSelected] = useState(false);
  // const [button, setButton] = useState(allCategories)



  function handleClick() {
    setIsSelected(current => !current);
  }
  
  return (
    <div className="categories">
      <h5>Category filters</h5>
      {categories.map((category, index) => {
        return <button  key={index}  className={isSelected ? "selected" : ""} onClick={()=>handleClick(category)}>{category}</button>
      })}
    </div>
  );
}

export default CategoryFilter;


