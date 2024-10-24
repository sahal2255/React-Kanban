import './App.css';
import TaskAdd from './Components/TaskAdd';
import TaskList from './Components/TaskList';
import React, { useState } from 'react';
// import Login from './Pages/Login';
// import Sign from './Pages/Sign';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './Components/Home';



function App() {

 



  return (
    <BrowserRouter>
      <Routes>
        {/* <Route path='/register' element={<Sign />} />
        <Route path='/' element={<Login />} /> */}
        <Route path='/' element={<Home />} />
      </Routes>
      
        {/* <div className="flex justify-center">
          <div className="m-6 bg-white p-6 rounded shadow-md w-full max-w-md">
            <TaskAdd />
          </div>
        </div>
      <TaskList /> */}
     
    </BrowserRouter>
  );
}

export default App;
