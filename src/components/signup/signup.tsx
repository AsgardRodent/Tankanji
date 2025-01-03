import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import supabase from '../../supabase'

const SignUp = () => {
  const navigate = useNavigate()
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')
  const [successMsg, setSuccessMsg] = useState('')

  const handleSubmit = async (e) => {
    e.preventDefault()

    try {
        const { error } = await supabase
        .from('users')
        .insert([{ email, password }])
      

      if (error) throw error

      setSuccessMsg('Registration successful! Redirecting to login...')
      setTimeout(() => navigate('/signin'), 2000)
    } catch (error) {
      setError(error.message)
    }
  }

  return (
    <div className='flex flex-row w-full h-screen'>
    <div className='w-[70%] bg-change'></div>
    <div className='w-[30%] bg-white flex items-center justify-center'>
    <form onSubmit={handleSubmit} className='flex flex-col justify-center items-center w-[80%] space-y-6'>
    <h1 className='text-3xl font-bold text-black mb-6'>Register</h1>
          {error && <p className="text-red-500 mb-4">{error}</p>}
          {successMsg && <p className="text-green-500 mb-4">{successMsg}</p>}
        <input
          type="email"
          placeholder="Email"
          className="w-full p-2 mb-4 border rounded"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <input
          type="password"
          placeholder="Password"
          className="w-full p-2 mb-6 border rounded"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <button
          type="submit"
          className="w-full px-4 py-2 bg-white text-orange-300 border-2 border-orange-300 hover:bg-orange-300 hover:text-white rounded-full transition duration-300 ease-in-out"
        >
          Sign Up
        </button>
      </form>
    </div>
    </div>
  )
}

export default SignUp

