import React from 'react'
import { useState} from 'react'
import Navbar from '../navbar/navbar.tsx'
import Footer from '../footer/footer.tsx'
import supabase from '../../supabase.js'
import KanjiBoxes from '../kanjiboxes/kanjiboxes.tsx'

const N5 = () => {
  console.log(supabase)

  const [fetchError, setFetchError] = useState<string | null>(null)

  return (
    <div>
      <Navbar />
      <div className='text-white min-h-screen bg-[url("./images/Fuji_img.jpg")] bg-cover bg-center'>
        <div className='max-w-[800px] bg-transparent h-[600px] mx-auto text-center flex flex-col justify-center items-center'>
          <div className='flex justify-center w-full mb-3'>
            <svg width="600" height="200" viewBox="0 0 16 12" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path className='Animated-class' d="M0.0800001 11V0.0499997H2.375L5.42 8.9C5.39 8.58 5.355 8.205 5.315 7.775C5.285 7.335 5.26 6.89 5.24 6.44C5.22 5.98 5.21 5.58 5.21 5.24V0.0499997H6.92V11H4.625L1.61 2.15C1.63 2.44 1.655 2.79 1.685 3.2C1.715 3.61 1.74 4.03 1.76 4.46C1.78 4.89 1.79 5.285 1.79 5.645V11H0.0800001ZM12.4791 11.15C11.4691 11.15 10.6591 10.9 10.0491 10.4C9.43914 9.89 9.10414 9.2 9.04414 8.33H10.9191C10.9591 8.71 11.1091 9.005 11.3691 9.215C11.6391 9.415 12.0091 9.515 12.4791 9.515C12.9991 9.515 13.3941 9.38 13.6641 9.11C13.9341 8.83 14.0691 8.445 14.0691 7.955V6.89C14.0691 6.39 13.9341 6.01 13.6641 5.75C13.3941 5.48 12.9991 5.345 12.4791 5.345C12.1591 5.345 11.8841 5.41 11.6541 5.54C11.4241 5.67 11.2491 5.85 11.1291 6.08H9.29914L9.37414 0.0499997H15.5391V1.745H11.1441L11.1141 4.925H11.5491L11.0991 5.3C11.0991 4.84 11.2791 4.48 11.6391 4.22C12.0091 3.95 12.5041 3.815 13.1241 3.815C14.0141 3.805 14.7041 4.075 15.1941 4.625C15.6941 5.165 15.9441 5.92 15.9441 6.89V7.955C15.9441 8.945 15.6341 9.725 15.0141 10.295C14.4041 10.865 13.5591 11.15 12.4791 11.15Z" fill="white"/>
            </svg>
          </div>
        </div>
      </div>
      <div className='bg-black min-h-auto'>
        <div className='max-w-[800px] mx-auto px-4 text-white'>
          <p>To pass the JLPT N5, you need to know approximately 80 kanji characters. These kanji form the foundation of basic Japanese writing and are essential for beginners.</p>
          <p>Below is the complete list of JLPT N5 kanji, ordered by frequency of use in everyday Japanese. Click on any kanji to access a detailed lesson, which includes:</p>
            <ul className='mt-4 list-disc pl-6'>
              <li>Stroke order</li>
              <li>Common readings (on'yomi and kun'yomi)</li>
              <li>Vocabulary words using the kanji</li>
              <li>Example sentences</li>
            </ul>
        </div>
      </div>
      <div className='text-white text-center bg-black'>
      {fetchError && (<p className='text-red-500'>{fetchError}</p>)}
      <div className="max-w-4xl mx-auto">
        <KanjiBoxes tableName="n5_database_kanji" onError={(error) => setFetchError('Could Not Fetch Kanjis')}/>
      </div>
      </div>
      <Footer />
    </div>
  )
}

export default N5