import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addTask } from '../Redux/Task/TaskSlice';

const TaskAdd = () => {
    const [task, setTask] = useState('');
    const [showInput, setShowInput] = useState(false);
    const dispatch = useDispatch();
  
    const handleAddTask = () => {
      if (task.trim()) {
        dispatch(addTask(task));
        // console.log('task',task);
        setTask('');
        setShowInput(false);
      }
    };
  
    const handleToggleInput = () => {
      setShowInput(!showInput);
    };
  
    return (
      <div className="mb-4">
        {showInput ? (
          <>
            <input
              type="text"
              value={task}
              onChange={(e) => setTask(e.target.value)}
              className="w-full px-4 py-2 border rounded mb-2"
              placeholder="Enter a new task"
              status={'Pending'}
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
