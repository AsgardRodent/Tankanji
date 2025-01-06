import React from 'react'
import './parallax.css'  // Create a separate CSS file

const Parallax = () => {
  return (
    <div className="parallax-container">
      <div className="parallax-layer mountain-bg"></div>
      <div className="parallax-layer left-river-bg"></div>
      <div className="parallax-layer right-river-bg"></div>
      <div className="parallax-layer gate-bg"></div>
      <div className='flex flex-col h-[500px] w-[1500px] heading-container justify-center items-center align-middle'>
        <h1 className='text-9xl text-white'> Hello This is parallax !!</h1>
      </div>
    </div>
  )
}

export default Parallax
