import React from 'react';
import { useSelector } from 'react-redux';

const TaskList = () => {
  const tasks = useSelector(state => state.tasks);
  const Status=['Pending','Processing','Completed']
  return (
    <div>
      <h2 className="text-xl font-semibold mb-3">Tasks</h2>
      <ul className="list-disc pl-5">
        {tasks.map((task, index) => (
          
          <li key={index} className="mb-1">
            {task.text},{task.status}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TaskList;
