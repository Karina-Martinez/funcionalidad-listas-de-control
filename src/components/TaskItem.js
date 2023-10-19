import React from 'react';

function TaskItem({ task, index, removeTask }) {
  return (
    <div>
      <span>{task.title}</span>
      <button onClick={() => removeTask(index)}>Delete</button>
    </div>
  );
}

export default TaskItem;