import React, { useState } from 'react'
// import { useNavigate } from 'react-router-dom'
import supabase from '../../supabase'
import '../signin/signin_box.css'
import { motion } from 'framer-motion'
import SignUp from '../../Components/signup/signup_box.tsx'

const Signin = ({onSuccess}) => {
//   const navigate = useNavigate()
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')
  const [successMsg, setSuccessMsg] = useState('')
  const [showSignUp, setShowSignUp] = useState(false);

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

      if (data.password === password) {
        setSuccessMsg('Login successful!')
        if (onSuccess) {
          await onSuccess()
        }
      } else {
        setError('Invalid password')
      }
    } catch (error) {
      setError('An error occurred during login')
    }
  }
  return (
    <motion.div>
    {showSignUp ? (
      <SignUp />
    ) : (
    <motion.div 
      className="fixed inset-0 flex items-center justify-center"
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.95 }}
      transition={{ duration: 0.3 }}
    >
  <div className="relative">
    <div className='absolute left-1/2 -top-10 transform -translate-x-1/2 w-[75px] h-[75px] rounded-xl z-10 kk-icon border-[rgba(217, 217, 217, 0.8)]'></div>
    <form onSubmit={handleSubmit} className="signin-form pt-12 px-6 pb-6 rounded-lg">
          <div className='items-center'>
          <h1 className='text-3xl font-bold text-black mb-6'>Welcome To KanjiKaze</h1>
          </div>
          <h1 className='justify-center'>Username</h1>
          <input 
            type="email" 
            placeholder="Username"
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 bg-[#D9D9D9] place-text"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <h1>Password</h1>
          <input 
            type="password" 
            placeholder="Password"
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 bg-[#D9D9D9] place-text"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <div className='flex flex-row mt-3 gap-2'>
          <button 
            type="submit"
            className="w-full px-4 py-2 bg-[#848484] text-black hover:bg-[#848484]/60 hover:text-white rounded-full transition duration-300 ease-in-out"
          >
            Sign In
          </button>
          <button 
            onClick={() => setShowSignUp(true)}
            className="w-full px-4 py-2 bg-[#848484]/60 text-black hover:bg-[#848484] hover:text-white rounded-full transition duration-300 ease-in-out"
          >
            Register
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
  </motion.div>
  )}

  
export default Signin