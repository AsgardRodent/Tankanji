import React from 'react'

const Footer = () => {
  return (
    <div className='bg-black w-full py-8 md:h-[75px] flex justify-center items-center'> {/* Changed to center alignment */}
        <div className='max-w-[1240px] w-full px-5'> {/* Added container for max-width */}
            <ul className='text-xl flex flex-col md:flex-row justify-center md:space-x-8 space-y-4 md:space-y-0 text-center text-white'>
                <li>© 2024</li>
                <li>Made By Gaurav Hungund</li>
                <li>Contact : Tankanji@gmail.com</li>
            </ul>
        </div>
    </div>
  )
}

export default Footer