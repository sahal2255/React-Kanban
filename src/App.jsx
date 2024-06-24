import './App.css';
import TaskAdd from './Components/TaskAdd';
import TaskList from './Components/TaskList';
import React from 'react';

function App() {
  return (
    <div>

    <div className=" bg-slate-500 flex justify-center">
      <div className=" m-6 bg-white p-6 rounded shadow-md w-full max-w-md">
        <TaskAdd />
      </div>
    </div>
      <TaskList />
    </div>
  );
}

export default App;
