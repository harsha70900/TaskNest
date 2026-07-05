import React from 'react'

export default function TaskList({tasks, updateTask, deleteTask}) {

  const ToggleComplete = (index) => {
    const updatedTask = {...tasks[index], completed: !tasks[index].completed};
    updateTask(updatedTask,index);
  }  
  return (
    <ul className='task-list'>
      {tasks.map((task,index) => (
        <li key={index} className={task.completed ? "completed": ""}>
          <div>
            <span>{task.text}
              <small>({task.priority}, {task.category})</small>
            </span>
          </div>
          <div>
          <button onClick={()=>ToggleComplete(index)}>
            {task.completed ? "Undo" : "complete"}</button>
          <button onClick={()=>deleteTask(index)}>Delete</button>
          </div>

        </li>
      ))}
    </ul>
  )
}
