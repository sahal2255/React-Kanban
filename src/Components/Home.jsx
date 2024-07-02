import React from 'react'
import TaskList from './TaskList'
import TaskAdd from './TaskAdd'
import 'react-toastify/dist/ReactToastify.css';

export default function Home() {
  return (
    <div >
      <div className="flex justify-center">
          <div className="m-6 bg-white p-6 rounded shadow-md w-full max-w-md">
            <TaskAdd />
          </div>
        </div>
      <TaskList />
    </div>
  )
}
