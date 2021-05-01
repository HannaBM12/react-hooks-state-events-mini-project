import React from "react";
import Task from "./Task";

function TaskList({tasks, selectedCategory, onDeleteTask}) {
  // console.log(tasks)
 
  const filteredTasks = tasks.filter(task => {
     if (selectedCategory === 'All'){
       return task
     } else {
       return selectedCategory === task.category
     }
  })

  const taskItems = filteredTasks.map(task => {
      return <Task key={task.text} text={task.text} category={task.category} onDeleteTask={onDeleteTask}/>
  }) 
  return (
    <div className="tasks">
      {taskItems}
    </div>
  );
}

export default TaskList;
