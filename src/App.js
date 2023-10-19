import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap's CSS
import TaskList from './components/TaskList';
import TaskForm from './components/TaskForm';

function App() {
  const [tasks, setTasks] = useState([]);

  const addTask = (taskText) => {
    // Implement the logic to add a new task to the tasks state
    // You can use the setTasks function to update the tasks state
    const newTask = { title: taskText };
    setTasks([...tasks, newTask]);
  };

  const removeTask = (index) => {
    // Implement the logic to remove a task by index
    // You can use the setTasks function to update the tasks state
    const updatedTasks = tasks.filter((_, i) => i !== index);
    setTasks(updatedTasks);
  };

  return (
    <div className="container mt-5">
      <div className="row justify-content-center">
        <div className="col-md-6">
          <div className="card">
            <div className="card-header bg-primary text-white">
              <h1 className="display-4">Task Manager</h1>
            </div>
            <div className="card-body">
              <TaskForm addTask={addTask} />
              <TaskList tasks={tasks} removeTask={removeTask} />
              {/* Add TaskItem and other components for rendering tasks here */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;