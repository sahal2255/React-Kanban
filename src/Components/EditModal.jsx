import React from 'react';




const EditModal = ({ task, onClose }) => {

    const handleChange=(e)=>{
        console.log(e.tatget.value);
    }


  return (
    <div className="fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-50 z-50">
      <div className="bg-white rounded-lg shadow-lg p-6 w-full max-w-md">
        <h2 className="text-2xl font-semibold mb-4">Edit Task</h2>
        {/* <p className="mb-6">{task.text}</p> */}
        <div className='w-full mx-auto my-4'>

        <input type="text" className='w-full  h-10 ' onChange={handleChange} value={task.text} />
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
            onClick={() => {
              // Save logic here
              console.log('Save task:', task);
              onClose();
            }}
          >
            Save
          </button>
        </div>
      </div>
    </div>
  );
};

export default EditModal;
