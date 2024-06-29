import React,{useState} from 'react'
import Login from './Login';

export default function Sign() {
        const [username, setUsername] = useState("");
        const [email, setEmail] = useState("");
        const [password, setPassword] = useState("");
        const [confirmPassword, setConfirmPassword] = useState("");
        const [showLogin,setShowLogin]=useState(false)
      
        const handleSubmit = (e) => {
          e.preventDefault();
          console.log("Username:", username);
          console.log("Email:", email);
          console.log("Password:", password);
          console.log("Confirm Password:", confirmPassword);
        };
  return (
    <div >
        {!showLogin ?(

        
      <div className="bg-white shadow-lg rounded-lg p-10 w-full max-w-md">
        <h2 className="text-2xl font-bold text-center text-yellow-700 mb-5">Sign Up</h2>
        <form onSubmit={handleSubmit} className="space-y-5">
          <div>
            <input
              type="text"
              placeholder="Enter Your Username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className="w-full text-center border-2 border-yellow-200 rounded-lg h-12 px-4 text-lg"
            />
          </div>
          <div>
            <input
              type="email"
              placeholder="Enter Your Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full text-center border-2 border-yellow-200 rounded-lg h-12 px-4 text-lg"
            />
          </div>
          <div>
            <input
              type="password"
              placeholder="Enter Your Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full text-center border-2 border-yellow-200 rounded-lg h-12 px-4 text-lg"
            />
          </div>
          <div>
            <input
              type="password"
              placeholder="Confirm Your Password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              className="w-full text-center border-2 border-yellow-200 rounded-lg h-12 px-4 text-lg"
            />
          </div>
          <div>
            <button
              type="submit"
              className="w-full bg-yellow-700 hover:bg-yellow-600 text-white font-bold py-3 px-4 rounded-lg transition duration-300"
            >
              Sign Up
            </button>
          </div>
        </form>
      <p>You have already a account ? <strong className=' underline underline-offset-1 cursor-pointer' onClick={()=>setShowLogin(true)}>Login</strong></p>
      </div>
      ):(
        <Login />
      )
    }

    </div>
  )
}
