import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addTask } from '../Redux/Task/TaskSlice';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const TaskAdd = () => {
  const [taskText, setTaskText] = useState(''); 
  const [showInput, setShowInput] = useState(false);
  const dispatch = useDispatch();
  
  const handleAddTask = () => {
    if (taskText.trim()) {
      dispatch(addTask({ text: taskText }));
      toast.success('Task added successfully!');
      setTaskText(''); 
      setShowInput(false);
    }
  };

  const handleToggleInput = () => {
    setShowInput(!showInput);
  };

  return (
    <div className="mb-4">
      <ToastContainer />
      {showInput ? (
        <>
          <input
            type="text"
            value={taskText}
            onChange={(e) => setTaskText(e.target.value)}
            className="w-full px-4 py-2 border rounded mb-2"
            placeholder="Enter a new task"
          />
          <button
            onClick={handleAddTask}
            className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600"
          >
            Add Task
          </button>
        </>
      ) : (
        <button
          onClick={handleToggleInput}
          className="w-full bg-green-500 text-white py-2 rounded hover:bg-green-600"
        >
          Add New Task
        </button>
      )}
    </div>
  );
};

export default TaskAdd;
