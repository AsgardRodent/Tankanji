import React from 'react'
import { useState} from 'react'
import Navbar from '../../navbar/new_navbar.jsx'
import Footer from '../../footer/footer.tsx'
import supabase from '../../../supabase.js'
import KanjiBoxes from '../../kanjiboxes/kanjiboxes.tsx'
import Drop from '../../../Images/kanji_drop_down.svg'
import "../n5/n5_styles.css"
import QuestionBox from '../../../Images/questionbox.svg' 
import Flower from '../../../Images/flower.svg'

const N5 = () => {
  console.log(supabase)

  const [fetchError, setFetchError] = useState(null)

  return (
    <div>
      <div
        className="w-full h-[300px] rounded-b-3xl flex flex-col gap-8"
        style={{
          backgroundImage: `url(${Drop})`,
        }}
      >
      <Navbar />  
      <div className='h-[190px] w-full flex flex-row gap-2 justify-center'>
        <div className='h-[190px] w-[190px] bg-[#C73830] flex justify-center items-center flex-col rounded-lg'>
          <div>
            <svg width="150" height="150" viewBox="0 0 16 12" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path className='Animated-class' d="M0.0800001 11V0.0499997H2.375L5.42 8.9C5.39 8.58 5.355 8.205 5.315 7.775C5.285 7.335 5.26 6.89 5.24 6.44C5.22 5.98 5.21 5.58 5.21 5.24V0.0499997H6.92V11H4.625L1.61 2.15C1.63 2.44 1.655 2.79 1.685 3.2C1.715 3.61 1.74 4.03 1.76 4.46C1.78 4.89 1.79 5.285 1.79 5.645V11H0.0800001ZM12.4791 11.15C11.4691 11.15 10.6591 10.9 10.0491 10.4C9.43914 9.89 9.10414 9.2 9.04414 8.33H10.9191C10.9591 8.71 11.1091 9.005 11.3691 9.215C11.6391 9.415 12.0091 9.515 12.4791 9.515C12.9991 9.515 13.3941 9.38 13.6641 9.11C13.9341 8.83 14.0691 8.445 14.0691 7.955V6.89C14.0691 6.39 13.9341 6.01 13.6641 5.75C13.3941 5.48 12.9991 5.345 12.4791 5.345C12.1591 5.345 11.8841 5.41 11.6541 5.54C11.4241 5.67 11.2491 5.85 11.1291 6.08H9.29914L9.37414 0.0499997H15.5391V1.745H11.1441L11.1141 4.925H11.5491L11.0991 5.3C11.0991 4.84 11.2791 4.48 11.6391 4.22C12.0091 3.95 12.5041 3.815 13.1241 3.815C14.0141 3.805 14.7041 4.075 15.1941 4.625C15.6941 5.165 15.9441 5.92 15.9441 6.89V7.955C15.9441 8.945 15.6341 9.725 15.0141 10.295C14.4041 10.865 13.5591 11.15 12.4791 11.15Z" fill="white"/>
            </svg>
          </div>
          <div>
            <h1 className='text-3xl text-[#EBDEBB]'>Level</h1>
          </div>
        </div>
        <div className='h-[190px] w-[600px] bg-[#C73830] rounded-lg flex flex-col items-center justify-center'>
          <div>
            <div className='flex justify-center items-center h-[100px] gap-2'>
              {[...Array(10)].map((_, index) => (
              <img 
                key={index} 
                src={Flower} 
                alt='flower' 
                className='w-[40px] h-[40px]'
                style={{ opacity: index < 3 ? 1 : 0.2 }} 
              />
              ))}
            </div>
            {/* <div className='w-full items-center justify-center flex h-[10px]'><h1 className='text-[#18517A] font-semibold'>Badges</h1></div> */}
            <div className='rounded-3xl w-[550px] bg-[#EBDEBB] h-[30px] flex justify-center items-center'>
            </div>
          </div>
        </div>
        <div className='h-[190px] w-[190px] bg-[#C73830] rounded-lg flex flex-col items-center justify-center gap-2'>
          <div>
              <h1 className='text-3xl text-[#EBDEBB]'>Quiz</h1>
          </div>
          <div>
            <img src={QuestionBox} alt='badge' className='w-[130px] h-[130px]' />
          </div>
      </div>
      </div>
      <div className='text-white text-center bg-white'>
      {fetchError && (<p className='text-red-500'>{fetchError}</p>)}
      <div className="max-w-4xl mx-auto">
        <KanjiBoxes tableName="n5_database_kanji" onError={(error) => setFetchError('Could Not Fetch Kanjis')}/>
      </div>
      </div>
      <Footer />
    </div>
    </div>
  )
}

export default N5