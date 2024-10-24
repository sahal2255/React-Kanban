// import React, { useState,useEffect } from "react";
// import { Link,useNavigate } from "react-router-dom";
// import { useForm } from 'react-hook-form';
// import axios from "axios";
// import Cookies from 'js-cookie'

// export default function Login() {
//   const { register, handleSubmit, formState: { errors } } = useForm();
//   const navigate=useNavigate()
//   useEffect(() => {
//     const cookieValue = Cookies.get('token');
//     if (cookieValue) {
//       navigate('/home');
//     }
//   }, [navigate]);

// const [loginMessage,setLoginMessage]=useState('')

//   const formSubmit = async(data) => {
 
//   try{

//   const response=await axios.post('http://localhost:3001/login',{
//     email:data.email,
//     password:data.password
//   })
//   console.log(response.data.token);
//   const token=response.data.token
//   Cookies.set('token', token, { expires: 7, secure: true });

 
//   navigate('/home')
// }catch (error) {
//   console.log('login error', error);
//   if (error.response) {
//     setLoginMessage(error.response.data.message);
//   } else {
//     setLoginMessage('An error occurred during login.');
//   }
// }

//   };

//   return (
//     <div className="flex justify-center items-center h-screen">
//       <div className="bg-white  p-10 rounded-lg shadow-2xl">
//         <h2 className="text-2xl font-bold text-center text-yellow-700 mb-5 ">Login</h2>
//         {loginMessage &&  <p className=" text-red-500">{loginMessage}</p> }
//         <form onSubmit={handleSubmit(formSubmit)} className="space-y-4">
//           <div>
//             <input
//               type="email"
//               placeholder="Enter Your Email"
//               {...register('email', {
//                 required: 'Enter Correct Email',
//                 pattern: {
//                   value: /\S+@\S+\.\S+/,
//                   message: 'Entered value does not match email format'
//                 }
//               })}
//               className="w-full text-center border-2 border-yellow-200 rounded-lg h-10 px-4 focus:outline-none focus:border-yellow-400"
//             />
//             {errors.email && <p className="text-red-500 text-sm">{errors.email.message}</p>}
//           </div>
//           <div>
//             <input
//               type="password"
//               placeholder="Enter Your Password"
//               {...register('password', {
//                 required: 'Enter Corrected Password',
//                 minLength: {
//                   value: 6,
//                   message: 'Password must be at least 6 characters'
//                 }
//               })}
//               className="w-full text-center border-2 border-yellow-200 rounded-lg h-10 px-4 focus:outline-none focus:border-yellow-400"
//             />
//             {errors.password && <p className="text-red-500 text-sm">{errors.password.message}</p>}
//           </div>
//           <div>
//             <button
//               type="submit"
//               className="w-full bg-yellow-700 hover:bg-yellow-600 text-white font-bold py-2 px-4 rounded-lg transition duration-300"
//             >
//               Login
//             </button>
//           </div>
//         </form>
//         <p className="text-sm">
//           Don't have an account?{" "}
//           <Link to="/register" className="text-yellow-700 hover:underline">
//             Create one
//           </Link>
//         </p>
//       </div>
//     </div>
//   );
// }
