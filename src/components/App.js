import React, { useState } from "react";
import CategoryFilter from "./CategoryFilter";
import NewTaskForm from "./NewTaskForm";
import TaskList from "./TaskList";

import { CATEGORIES, TASKS } from "../data";
console.log("Here's the data you're working with");
console.log({ CATEGORIES, TASKS });

function App() {
  const[selectedCategory, setSelectedCategory] = useState("")
  const[tasks, setTasks]= useState(TASKS)

  function addTask(taskObj){
    // console.log("App", taskObj)
    setTasks([...tasks, taskObj])
  }

 
  function handleDeleteTask(deleteObj){
    setTasks(tasks.filter(task =>{
        return task.text !== deleteObj
    }))
  }
 
  return (
    <div className="App">
      <h2>My tasks</h2>
      <CategoryFilter categories={CATEGORIES} setSelectedCategory={setSelectedCategory} />
      <NewTaskForm categories={CATEGORIES} onTaskFormSubmit={addTask}/>
      <TaskList tasks={tasks} selectedCategory={selectedCategory} onDeleteTask={handleDeleteTask}/>
    </div>
  );
}

export default App;
