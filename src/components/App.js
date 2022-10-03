import React, { useState } from "react";
import CategoryFilter from "./CategoryFilter";
import NewTaskForm from "./NewTaskForm";
import TaskList from "./TaskList";

import { CATEGORIES, TASKS } from "../data";
console.log("Here's the data you're working with");
console.log({ CATEGORIES, TASKS });

const allCategories = ["All", ...TASKS.map(task => task.category)];
console.log(allCategories);

function App() {
  const [tasks, setTasks] = useState(TASKS);
  const [category, setCategory] = useState('all');
  
  // const [filteredCategory, setFilteredCategory] = useState(allCategories)

  // const filter = (button => {
  //   const filteredData = TASKS.filter(task => task.category === button)
  //   setFilteredCategory(filteredData)
  // })

  const VisibleTasks = tasks.filter(task => category === "all" 
  || task.category === category)

  function handleDeleteTask(deletedText){
    setTasks(tasks.filter(task => task.text !== deletedText))
  }
  
  function onTaskFormSubmit(newTask) {
    setTasks([...tasks, newTask])
  }
    return (
    <div className="App">
      <h2>My tasks</h2>
      <CategoryFilter
        categories={CATEGORIES} 
        // setCategory={category} 
        // setCategoryFilter={setCategory}

        // filter={filter}
        // filteredCategory={filteredCategory}
      />

      <NewTaskForm  
        onTaskFormSubmit={onTaskFormSubmit} 
        categories={CATEGORIES}
        />

      <TaskList 
        tasks={VisibleTasks} 
        onDeleteTask={handleDeleteTask}/>
    </div>
  );
}

export default App;
