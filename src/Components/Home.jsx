import React,{useEffect} from 'react'
import TaskList from './TaskList'
import TaskAdd from './TaskAdd'
import 'react-toastify/dist/ReactToastify.css';
import Cookies from "js-cookie";
import { useNavigate } from 'react-router-dom';


export default function Home() {
    // const navigate=useNavigate()

    // console.log('home',document.cookie)
    

  // useEffect(() => {
  //   const cookieValue = Cookies.get('token');
  //   console.log('cookie value:', cookieValue);

  //   if (!cookieValue) {
  //     console.log('no cookie, redirecting to login');
  //     navigate('/');
  //   }
  //   else{
  //       console.log('cookies already');
  //       signOut()
  //       navigate('/home')
  //   }
  // }, [navigate]);



  // const signOut=()=>{
  //   console.log('signout');
  //   Cookies.remove('token')
  //   navigate('/')
  // }
  return (
    <div >
      <div className="flex justify-center">

          <div className="m-6 bg-white p-6 rounded shadow-md w-full max-w-md">
            
            <TaskAdd />
          </div>
          {/* <div className=' m-10 '>
            <button className=' bg-yellow-400 px-6 mx-auto h-10 rounded-lg' onClick={signOut}>Sign Out</button>
            </div> */}
        </div>
      <TaskList />


      
    </div>
  )
}
