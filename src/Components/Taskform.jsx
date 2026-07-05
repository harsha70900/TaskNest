
import React, { useState } from 'react'

export default function Taskform({addTask}) {
    const [task, setTask] = useState('');
    const [priority, setPriority] = useState('medium');
    const [category, setCategory] = useState('general');

    const handelSubmit=(e)=> {
        e.preventDefault();
        addTask({text:task, priority,category,completed:false});

        setTask('');
        setPriority('medium');
        setCategory('general');
    }   

  return (
    <form className='task-form' onSubmit={handelSubmit}>
        <div id='inp'>
            <input type="text" placeholder='Enter the task' onChange={(e) => setTask(e.target.value)} value={task}/>
            <button type='submit'>Add Task</button>
           {/* {task} {priority} {category}*/} 
        </div>

        <div>
            <select id="but1" onChange={(e)=> setPriority(e.target.value)} value={priority}>
                <option value="high">high</option>
                <option value="medium">medium</option>
                <option value="low">low</option>
            </select>

            <select id="but2" onChange={(e)=> setCategory(e.target.value)} value={category}>
                <option value="general">General</option>
                <option value="work">Work</option>
                <option value="personal">Personal</option>
            </select>
        </div>
    </form>
  )
}
