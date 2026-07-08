import React from "react";

export default function TaskList({
  tasks,
  updateTask,
  deleteTask,
  editTask,
  editIndex,
  editText,
  setEditText,
  saveTask,
}) {

  // Toggle Complete / Undo
  const toggleComplete = (index) => {
    const updatedTask = {
      ...tasks[index],
      completed: !tasks[index].completed,
    };

    updateTask(updatedTask, index);
  };

  return (
    <ul className="task-list">

      {tasks.map((task, index) => (

        <li
          key={index}
          className={`task-card ${task.completed ? "completed" : ""}`}
        >

          {/* Left Section */}
          <div className="task-content">

            {editIndex === index ? (

              <input
                className="edit-input"
                type="text"
                value={editText}
                onChange={(e) => setEditText(e.target.value)}
                autoFocus
              />

            ) : (

              <>
                <h3>{task.text}</h3>

                <div className="task-info">

                  <span
                    className={`priority ${task.priority.toLowerCase()}`}
                  >
                    {task.priority.toUpperCase()}
                  </span>

                  <span className="category">
                    {task.category}
                  </span>

                </div>
              </>

            )}

          </div>

          {/* Right Section */}
          <div className="task-actions">

            <button
              className="complete-btn"
              onClick={() => toggleComplete(index)}
            >
              {task.completed ? "Undo" : "Complete"}
            </button>

            {editIndex === index ? (

              <button
                className="save-btn"
                onClick={saveTask}
              >
                Save
              </button>

            ) : (

              <button
                className="edit-btn"
                onClick={() => editTask(index)}
              >
                Edit
              </button>

            )}

            <button
              className="delete-btn"
              onClick={() => deleteTask(index)}
            >
              Delete
            </button>

          </div>

        </li>

      ))}

    </ul>
  );
}