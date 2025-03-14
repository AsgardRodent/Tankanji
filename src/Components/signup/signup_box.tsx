import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import supabase from '../../supabase'
import '../signup/signup_box.css'
import { motion } from 'framer-motion'

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
    <motion.div 
      className="fixed inset-0 flex items-center justify-center"
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.95 }}
      transition={{ duration: 0.3 }}
    >
  <div className="relative">
    <div className='absolute left-1/2 -top-10 transform -translate-x-1/2 w-[75px] h-[75px] z-10 kk-icon border-[rgba(217, 217, 217, 0.8)]'></div>
    <form onSubmit={handleSubmit} className="signin-form pt-12 px-6 pb-6 rounded-lg">
          <div className='items-center'>
          <h1 className='text-3xl font-bold text-black mb-6'>Register To KanjiKaze</h1>
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
          className="w-full px-4 py-2 bg-[#848484]/60 text-black hover:bg-[#848484] hover:text-white rounded-full transition duration-300 ease-in-out">
          Sign Up
        </button>
          </div>
          <div>
          {successMsg && <p className="text-green-500 mb-4">{successMsg}</p>}
          {error && <p className="text-red-500 mb-4">{error}</p>}
          </div>
        </form>
        </div>
        </motion.div>
  )}

  
export default SignUp