import React from 'react'
import '../signin/signin.css'

const Signin = () => {
  return (
    <div className='flex flex-row w-full h-screen'>
        <div className='w-[70%] bg-change'></div>
        <div className='w-[30%] bg-white rounded-l-2xl flex items-center justify-center'>
            <div className='flex flex-col justify-center items-center w-[80%] space-y-6'>
                <h1 className='text-3xl font-bold text-black mb-6'> Sign In </h1>
                <input 
                  type="text" 
                  id="username" 
                  placeholder="Username"
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  required
                />
                <input 
                  type='password' 
                  id='password' 
                  placeholder="Password"
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  required
                />
                <button 
                  type="submit" 
                  className="w-full px-4 py-2 bg-blue-500 text-white rounded-full hover:bg-blue-600 transition duration-300 ease-in-out"
                >
                  Login
                </button>
            </div>
        </div>
    </div>
  )
}

export default Signin
