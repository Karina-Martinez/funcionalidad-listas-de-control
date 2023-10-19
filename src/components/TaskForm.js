import React, { useState } from 'react';

function TaskForm({ addTask }) {
  const [taskText, setTaskText] = useState('');

  const handleTaskTextChange = (e) => {
    setTaskText(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Check if the task text is not empty
    if (taskText.trim() === '') {
      return;
    }

    // Call the addTask function to add the new task
    addTask(taskText);

    // Clear the input field
    setTaskText('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Add a new task"
        value={taskText}
        onChange={handleTaskTextChange}
      />
      <button type="submit">Add Task</button>
    </form>
  );
}

export default TaskForm;