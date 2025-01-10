import React, {useState} from 'react';
import {AiOutlineClose , AiOutlineMenu} from 'react-icons/ai';
import { useNavigate } from 'react-router-dom';

const Navbar = () => {
    const[nav, setNav] = useState(false)

    const handleNav = () => {
        setNav(!nav)
    }

    const navigate = useNavigate()

    const N5 = () => {
      navigate('/n5')
    }

    const N4 = () => {
      navigate('/n4')
    }
    
    const H = () => {
      navigate('/Home')
    }

    const N3 = () => {
      navigate('/n3')
    }

    const Quiz_page = () => {
      navigate('/quiz')
    }
  return (
    <div className= 'text-white flex justify-between items-center h-12 mx-auto px-4 max-w-[95%] bg-gray-200 bg-opacity-10 rounded-full border-2 border-black'>
      <h1 className='w-full font-bold text-3xl text-black'>Tankanji</h1>
      <ul className='hidden md:flex text-white'>
        <li className='p-4 hover:text-black transition-all duration-700 ease-in-out' onClick={H}>Home</li>
        <li className='p-4 hover:text-black transition-all duration-700 ease-in-out' onClick={N5}>N5</li>
        <li className='p-4 hover:text-black transition-all duration-700 ease-in-out' onClick={N4}>N4</li>
        <li className='p-4 hover:text-black transition-all duration-700 ease-in-out' onClick={N3}>N3</li>
        <li className='p-4 hover:text-black transition-all duration-700 ease-in-out'>N2</li>
        <li className='p-4 hover:text-black transition-all duration-700 ease-in-out'>N1</li>
        <li className='p-4 hover:text-black transition-all duration-700 ease-in-out' onClick={Quiz_page}>Quiz</li>
      </ul>
      {<div onClick={handleNav} className='block md:hidden text-black'>
        {nav ? <AiOutlineClose size = {20}/> : <AiOutlineMenu size = {20}/>}
      </div> }
      <div className={nav ? 'fixed left-0 top-0 w-[60%] border-r border-r-gray-600 h-full ease-in-out duration-700 bg-[white]' : 'fixed left-[-100%]'}>
      <h1 className='font-bold w-full text-3xl text-black m-5'>Tankanji</h1>
        <ul className='uppercase p-4'>
            <li className='p-4 border-2 bg-white border-gray-300 text-black rounded-xl hover:text-white hover:bg-gray-400 transition-all duration-700 ease-in-out'>Home</li>
            <li className='p-4 border-2 bg-white border-gray-300 text-black rounded-xl hover:text-white hover:bg-gray-400 transition-all duration-700 ease-in-out'>N5</li>
            <li className='p-4 border-2 bg-white border-gray-300 text-black rounded-xl hover:text-white hover:bg-gray-400 transition-all duration-700 ease-in-out'>N4</li>
            <li className='p-4 border-2 bg-white border-gray-300 text-black rounded-xl hover:text-white hover:bg-gray-400 transition-all duration-700 ease-in-out'>N3</li>
            <li className='p-4 border-2 bg-white border-gray-300 text-black rounded-xl hover:text-white hover:bg-gray-400 transition-all duration-700 ease-in-out'>N2</li>
            <li className='p-4 border-2 bg-white border-gray-300 text-black rounded-xl hover:text-white hover:bg-gray-400 transition-all duration-700 ease-in-out'>N1</li>
            <li className='p-4 border-2 bg-white border-gray-300 text-black rounded-xl hover:text-white hover:bg-gray-400 transition-all duration-700 ease-in-out'>Quiz</li>
        </ul>
      </div>
    </div>
  )
}

export default Navbar
