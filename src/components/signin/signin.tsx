import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import supabase from '../../supabase'
import '../signin/signin.css'

const Signin = () => {
  const navigate = useNavigate()
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')
  const [successMsg, setSuccessMsg] = useState('')

  const handleSubmit = async (e) => {
    e.preventDefault()

    if (!email) {
      setError('Please enter your email')
      return
    }

    if (!password) {
      setError('Please enter your password')
      return
    }

    try {
      const { data, error } = await supabase
        .from('users')
        .select('*')
        .eq('email', email)
        .single()

      if (error) {
        setError('Invalid User')
        return
      }

      if (!data) {
        setError('User not found')
        return
      }

      if (data.password !== password) {
        setError('Invalid password')
        return
      }

      setSuccessMsg('Login successful! Redirecting...')
      setError('')
      setTimeout(() => navigate('/Home'), 2000)

    } catch (error) {
      setError('An error occurred during login')
    }
  }

  return (
    <div className='flex flex-row w-full h-screen'>
      <div className='w-[70%] bg-change'></div>
      <div className='w-[30%] bg-white flex items-center justify-center'>
        <form onSubmit={handleSubmit} className='flex flex-col justify-center items-center w-[80%] space-y-6'>
          <h1 className='text-3xl font-bold text-black mb-6'>Welcome Back</h1>
          {error && <p className="text-red-500 mb-4">{error}</p>}
          {successMsg && <p className="text-green-500 mb-4">{successMsg}</p>}
          <input 
            type="email" 
            placeholder="Email"
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <input 
            type="password" 
            placeholder="Password"
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <button 
            type="submit"
            className="w-full px-4 py-2 bg-white text-violet-400 border-2 border-violet-400 hover:bg-violet-400 hover:text-white rounded-full transition duration-300 ease-in-out"
          >
            Sign In
          </button>
          <button 
            onClick={() => navigate('/signup')}
            className="w-full px-4 py-2 bg-white text-orange-300 border-2 border-orange-300 hover:bg-orange-300 hover:text-white rounded-full transition duration-300 ease-in-out"
          >
            Register
          </button>
        </form>
      </div>
    </div>
  )
}

export default Signin
