// import React, { useEffect, useState } from "react";
// import { Link,useNavigate } from "react-router-dom";
// import { useForm } from 'react-hook-form';
// import axios from 'axios'
// import Cookies from "js-cookie";



// export default function Sign() {
//   const { register, handleSubmit, formState: { errors }, getValues } = useForm();
//   const navigate = useNavigate();
//   const [signMessage,setSignMessage]=useState('')


//   useEffect(()=>{
//     const CookieValue=Cookies.get('token')
//     if(CookieValue){
//       navigate('/home')
//     }
//   },[navigate])

//   const formSubmit = async(data) => {

//     try{
//       const response= await axios.post('http://localhost:3001/signup',{
//         username:data.username,
//         email:data.email,
//         password:data.password
//       })
//       console.log(response.data);
//       const token = response.data.token;

//       Cookies.set("token", token, { expires: 7, secure: true });

//       navigate('/home')
//     }
//     catch(error){
//       console.log('sign up error',error);
//       if(error.response){
//         setSignMessage(error.response.data.message)
//       }else{
//         console.log('response error');
//       }
      
//     }
//   };


//   return (
//     <div className="flex justify-center items-center h-screen">
//       <div className="bg-white shadow-2xl rounded-lg p-10 w-full max-w-md">
//         <h2 className="text-2xl font-bold text-center text-yellow-700 mb-5">Sign Up</h2>
//         {signMessage && <p className="text-red-500">{signMessage}</p> }
//         <form onSubmit={handleSubmit(formSubmit)} className="space-y-5">
//           <div>
//             <input
//               type="text"
//               placeholder="Enter Your Username"
//               {...register('username', {
//                 required: 'Enter Your Username',
//                 minLength: {
//                   value: 7,
//                   message: 'Username must be at least 7 characters'
//                 }
//               })}
//               className="w-full text-center border-2 border-yellow-200 rounded-lg h-12 px-4 text-lg focus:outline-none focus:border-yellow-400"
//             />
//             {errors.username && <p className='text-red-500 text-sm'>{errors.username.message}</p>}
//           </div>
//           <div>
//             <input
//               type="email"
//               placeholder="Enter Your Email"
//               {...register('email', {
//                 required: 'Enter Your Email',
//                 pattern: {
//                   value: /\S+@\S+\.\S+/,
//                   message: 'Entered value does not match email format'
//                 }
//               })}
//               className="w-full text-center border-2 border-yellow-200 rounded-lg h-12 px-4 text-lg focus:outline-none focus:border-yellow-400"
//             />
//             {errors.email && <p className='text-red-500 text-sm'>{errors.email.message}</p>}
//           </div>
//           <div>
//             <input
//               type="password"
//               placeholder="Enter Your Password"
//               {...register('password', {
//                 required: 'Enter Your Password',
//                 minLength: {
//                   value: 6,
//                   message: 'Password must be at least 6 characters'
//                 }
//               })}
//               className="w-full text-center border-2 border-yellow-200 rounded-lg h-12 px-4 text-lg focus:outline-none focus:border-yellow-400"
//             />
//             {errors.password && <p className='text-red-500 text-sm'>{errors.password.message}</p>}
//           </div>
//           <div>
//             <input
//               type="password"
//               placeholder="Confirm Your Password"
//               {...register('confirmPassword', {
//                 required: 'Confirm Your Password',
//                 validate: (value) =>
//                   value === getValues('password') || 'Passwords do not match'
//               })}
//               className="w-full text-center border-2 border-yellow-200 rounded-lg h-12 px-4 text-lg focus:outline-none focus:border-yellow-400"
//             />
//             {errors.confirmPassword && <p className='text-red-500 text-sm'>{errors.confirmPassword.message}</p>}
//           </div>
//           <div>
//             <button
//               type="submit"
//               className="w-full bg-yellow-700 hover:bg-yellow-600 text-white font-bold py-3 px-4 rounded-lg transition duration-300"
//             >
//               Sign Up
//             </button>
//           </div>
//         </form>
//         <p className="text-center mt-4">
//           You already have an account?{" "}
//           <Link to="/" className="text-yellow-700 hover:underline">
//             Login
//           </Link>
//         </p>
//       </div>
//     </div>
//   );
// }
