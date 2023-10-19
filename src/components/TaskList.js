import React from 'react';
import TaskItem from './TaskItem'; // Import the TaskItem component

function TaskList({ tasks, removeTask }) {
  const taskItems = tasks.map((task, index) => (
    <TaskItem key={index} task={task} index={index} removeTask={removeTask} />
  ));

  return (
    <div>
      <h2>Task List</h2>
      {taskItems}
    </div>
  );
}

export default TaskList;