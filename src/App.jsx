import React, { useEffect, useState } from "react";
import Taskform from "./Components/Taskform";
import TaskList from "./Components/TaskList";
import ProgressTracker from "./Components/ProgressTracker";

export default function App() {

  // Load tasks from localStorage when the app starts
  const [tasks, setTasks] = useState(() => {
    const savedTasks = localStorage.getItem("tasks");
    return savedTasks ? JSON.parse(savedTasks) : [];
  });

  // Save tasks whenever they change
  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  // Add Task
  const addTask = (task) => {
    setTasks([...tasks, task]);
  };

  // Update Task (Complete / Undo)
  const updateTask = (updatedTask, index) => {
    const newTasks = [...tasks];
    newTasks[index] = updatedTask;
    setTasks(newTasks);
  };

  // Delete Task
  const deleteTask = (index) => {
    setTasks(tasks.filter((_, i) => i !== index));
  };

  // Clear All Tasks
  const clearTasks = () => {
    if (window.confirm("Are you sure you want to delete all tasks?")) {
      setTasks([]);
    }
  };

  // ==========================
  // EDIT TASK
  // ==========================

  const [editIndex, setEditIndex] = useState(null);
  const [editText, setEditText] = useState("");

  const editTask = (index) => {
    setEditIndex(index);
    setEditText(tasks[index].text);
  };

  const saveTask = () => {

    if (editText.trim() === "") {
      alert("Task cannot be empty!");
      return;
    }

    const newTasks = [...tasks];

    newTasks[editIndex] = {
      ...newTasks[editIndex],
      text: editText,
    };

    setTasks(newTasks);

    setEditIndex(null);
    setEditText("");
  };

  return (
    <div className="app-wrapper">

      <div className="app-container">

        <h1 className="app-title">TaskNest</h1>

        <p className="app-subtitle">
          Organize your day efficiently ✨
        </p>

        <Taskform addTask={addTask} />

        <TaskList
          tasks={tasks}
          updateTask={updateTask}
          deleteTask={deleteTask}
          editTask={editTask}
          editIndex={editIndex}
          editText={editText}
          setEditText={setEditText}
          saveTask={saveTask}
        />

        <ProgressTracker tasks={tasks} />

        {tasks.length > 0 && (
          <button
            className="clear-btn"
            onClick={clearTasks}
          >
            🗑 Clear All Tasks
          </button>
        )}

      </div>

    </div>
  );
}