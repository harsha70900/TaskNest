import React, { useEffect, useState } from 'react'
import Taskform from './Components/Taskform'
import TaskList from './Components/TaskList'
import ProgressTracker from './Components/ProgressTracker'

export default function App() {
const[tasks, setTasks] = useState([]);

useEffect(() => {
  localStorage.setItem("tasks", JSON.stringify(tasks))
}, [tasks]);

  const addTask = (task) => {
    setTasks([...tasks,task]);
  }

  const updateTask = (updateTask,index) => {
    const newTask = [...tasks];
    newTask[index] = updateTask;
    setTasks(newTask);
  }

  const deleteTask = (index) => {
    setTasks(tasks.filter((_,i)=> i !=index));

  }

  const clearTasks= () => {
    setTasks([]);
  }

  return (

    <div className="app-wrapper">

  <div className="app-container">

    <h1 className="app-title">
      TaskNest
    </h1>

    <p className="app-subtitle">
      Organize your day efficiently ✨
    </p>

    <div>
      <Taskform addTask={addTask}/>
      <TaskList tasks={tasks}
      updateTask = {updateTask}
      deleteTask = {deleteTask}/>
      <ProgressTracker tasks={tasks}/>

      {tasks.length>0 && (<button onClick={clearTasks} className='clear-btn'>Clear All Tasks</button>)}

    </div>
    </div>
    </div>
  )
}
