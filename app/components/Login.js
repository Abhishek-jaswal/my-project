"use client";
import { useRouter } from "next/navigation";
import { useState } from "react";



export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();
  const handleLogin = ()=>{
  
    if(email === "admin" && password === "admin"){
      console.log("Login Success");
        router.push("/admin");
  }
  }
  return (
     
    <div className="flex items-center justify-center h-screen">
        <div className="flex flex-col items-center justify-center w-full h-full space-y-4  p-6 rounded-lg shadow-lg max-w-sm">
          <h1 className="text-4xl font-bold text-center text-gray-900 dark:text-gray-100">Welcome to Admin Login page</h1>
          <input type="text" placeholder="Enter your email" onChange={(e)=>setEmail(e.target.value)}  className="p-2 border-2 border-gray-300 dark:border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-gray-600" />
          <input type="password" placeholder="Enter your password" onChange={(e)=>setPassword(e.target.value)} className="p-2 border-2 border-gray-300 dark:border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-gray-600" />
          <button onClick={handleLogin} className="p-2 border-2 border-gray-300 dark:border-gray-700 rounded-md  hover:border-blue-500">Login</button>
      </div>
      
   </div>
  );
}
import React from 'react'


