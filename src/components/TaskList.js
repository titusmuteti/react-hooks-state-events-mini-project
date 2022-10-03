import React from "react";
import Task from "./Task";

function TaskList({tasks, onDeleteTask}) {

  const task = tasks.map(task => {
    return (
      <div key={task.text} className="tasks">
         <Task 
          key={task.text} 
          text={task.text} 
          category={task.category}  
          onDeleteTask={onDeleteTask}
         />
    </div>
    )
  })
  return (
    <div key={task.text} className="tasks">
      {task}
    </div>
  )
}

export default TaskList;
