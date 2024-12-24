import React from 'react'
import Navbar  from '../navbar/navbar.tsx'
import Footer from '../footer/footer.tsx'
import supabase from '../../supabase.js'
//import Whiteboard from '../scribble_quiz/whiteboard/whiteboard.tsx'

const scribble_quiz = () => {
    console.log(supabase)
  return (
    <div>
        <Navbar />
        <div className='flex-col flex items-center'>
            {/* <Whiteboard /> */}
        </div>
        <Footer />
    </div>
  )
}

export default scribble_quiz
