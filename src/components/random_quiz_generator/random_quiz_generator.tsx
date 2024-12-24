import React from 'react'
import Navbar  from '../navbar/navbar.tsx'
import Footer from '../footer/footer.tsx'
import '../random_quiz_generator/random_quiz_generator.css'

const Random_Quiz_Genenrator = () => {
  return (
    <div>
      <Navbar />
      <div className='flex flex-col h-[700px] mx-auto my-auto w-[1000px] border-2 border-white'>
        <div className='flex flex-row text-6xl justify-center items-center border-2 border-red-500 h-[250px]'>
          <h1>Select Your Level</h1>
        </div>
        <div className='flex flex-row bg-yellow-500 h-[350px] justify-between'>
          <div className='box text-black border-3 border-blue-500 w-[150px]'>
            <h3> N5 </h3>
          </div>
          <div className='box text-black border-3 border-blue-500 w-[150px]'>
            <h3> N4 </h3>
          </div>
          <div className='box text-black border-3 border-blue-500 w-[150px]'>
            <h3> N3 </h3>
          </div>
          <div className='box text-black border-3 border-blue-500 w-[150px]'>
            <h3> N2 </h3>
          </div>
          <div className='box text-black border-3 border-blue-500 w-[150px]'>
            <h3> N1 </h3>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default Random_Quiz_Genenrator
