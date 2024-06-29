import React, { useState } from "react";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle login logic here
    console.log("Email:", email);
    console.log("Password:", password);
    // You can add more logic to handle the login process, like making an API call
  };

  return (
    <div className="">
      <div className="bg-gray-100 flex justify-center m-10 p-10">
        <form onSubmit={handleSubmit} className="">
          <div className="">
            <input
              type="email"
              placeholder="Enter Your Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full text-center border-2 border-yellow-200 rounded-lg h-10"
            />
          </div>
          <div className="mt-5">
            <input
              type="password"
              placeholder="Enter Your Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full text-center border-2 border-yellow-200 rounded-lg h-10"
            />
          </div>
          <div className="mt-5">
            <button
              type="submit"
              className="w-full bg-yellow-700 hover:bg-yellow-600 text-white font-bold py-2 px-4 rounded-lg"
            >
              Login
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
