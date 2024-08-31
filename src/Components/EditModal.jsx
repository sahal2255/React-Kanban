import React, { useState } from 'react';
import { editTask } from '../Redux/Task/TaskSlice';
import { useDispatch } from 'react-redux';




const EditModal = ({ task, onClose }) => {
  const dispatch=useDispatch()
    const [inputValue,setInputValue]=useState(task.text)
    const handleChange=(e)=>{
        setInputValue(e.target.value);
    }

    const handleUpdate = () => {
      dispatch(editTask({ id: task.id, text: inputValue }));
      onClose();
    };

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-50 z-50">
      <div className="bg-white rounded-lg shadow-lg p-6 w-full max-w-md">
        <h2 className="text-2xl font-semibold mb-4">Edit Task</h2>
        <div className='w-full mx-auto my-4'>

        <input type="text" 
        className='w-full text-center border-2 border-yellow-200 rounded-lg h-10 ' 
        onChange={handleChange} 
        value={inputValue} />
        </div>
        <div className="flex justify-end space-x-4">
          <button 
            className="bg-gray-500 text-white px-4 py-2 rounded hover:bg-gray-600" 
            onClick={onClose}
          >
            Cancel
          </button>
          <button 
            className="bg-green-300 text-white px-4 py-2 rounded hover:bg-green-600"
            onClick={()=>handleUpdate(task.id)}
          >
            Save
          </button>
        </div>
      </div>
    </div>
  );
};

export default EditModal;
