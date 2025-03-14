import React from 'react'
import { motion } from "motion/react"
import '../loader/loader.css'

const doorLeft = {
    width: '50%',
    height: '100vh',
    backgroundColor: "#ff0088",
    borderRadius: 5,
}

const doorRight = {
    width: '50%',
    height: '100vh',
    backgroundColor: "#ffffff",
    borderRadius: 5,
}

const Loader = ({ isVisible }) => {
    if (!isVisible) return null;

    return (
        <div style={{ display: 'flex', overflow: 'hidden', position: 'fixed', top: 0, left: 0, right: 0, bottom: 0, zIndex: 9999 }}>
        {/* Left Door Loader */}
        <motion.div className='left_Door'
            style={doorLeft}
            animate={{ x : ['0' , '-100%'] }}
            transition={{ duration: 2, ease:'easeIn', delay: 0.5}}
        />
        {/* Right Door Loader */}
        <motion.div className='right_Door'
            style={doorRight}
            animate={{ x : ['0' , '100%'] }}
            transition={{ duration: 2, ease: 'easeIn', delay: 0.5}}
        />
        </div>
  )
}

export default Loader
