import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { AiFillDelete,AiFillEdit } from 'react-icons/ai'
import { deleteTask } from '../Redux/Task/TaskSlice';
import EditModal from './EditModal';

const TaskList = () => {
  const dispatch=useDispatch()
  const tasks = useSelector(state => state.tasks);
  const statusCategories = ['Pending', 'Processing', 'Completed'];

  const [deleteId,setDeleteId]=useState(null)

  const [showModal,setShowModal] = useState(false)
  const [selectedTask,setSelectedTask]=useState(null)

  const categorizedTasks = statusCategories.map(status => ({
    status,
    tasks: tasks.filter(task => task.status === status)
  }));

  const deleteItem = (taskId) => {
    dispatch(deleteTask(taskId));
  };

  const edtiItem=(task)=>{
    console.log('edit select');
    setSelectedTask(task)
    setShowModal(true)
  }

  return (
    <div>

    
    <div className="flex justify-between mx-5  border-solid rounded-lg border-2 border-sky-900 text-center mt-5 bg-slate-200 p-5">
      {categorizedTasks.map(category => (
        <div key={category.status} className="w-1/3 border-dashed border-2 border-sky-500 p-4 bg-white rounded-lg shadow-lg mx-2">
          <h2 className="text-xl font-semibold mb-3">{category.status}</h2>
          <div className="space-y-3 ">
            {category.tasks.map((task, id) => (
              <div key={id} className="p-3 bg-slate-100 flex justify-between items-center rounded shadow">
              <span>{task.text}</span>
              <div className="flex space-x-2">
              <button className="text-red-500 hover:text-red-700" onClick={() => deleteItem(task.id)}><AiFillDelete /></button>
              <button className="text-blue-500 hover:text-blue-700" onClick={()=>edtiItem(task)}><AiFillEdit /></button>
                
                
              </div>
            </div>
            ))}
          </div>
        </div>
      ))}
    </div>
            {showModal && <EditModal task={selectedTask} onClose={() => setShowModal(false)} />}

    </div>
  );
};

export default TaskList;
