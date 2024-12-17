import React from 'react'
import { useState} from 'react'
import Navbar from '../navbar/navbar.tsx'
import Footer from '../footer/footer.tsx'
import supabase from '../../supabase.js'
import KanjiBoxes from '../kanjiboxes/kanjiboxes.tsx'

const N4 = () => {
  console.log(supabase)

  const [fetchError, setFetchError] = useState<string | null>(null)

  return (
    <div>
      <Navbar />
      <div className='text-white min-h-screen bg-[url("./images/Fuji_img.jpg")] bg-cover bg-center'>
        <div className='max-w-[800px] bg-transparent h-[600px] mx-auto text-center flex flex-col justify-center items-center'>
          <div className='flex justify-center w-full mb-3'>
            <svg width="600" height="200" viewBox="0 0 16 12" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path className='Animated-class' d="M0.0800001 11V0.0499997H2.375L5.42 8.9C5.39 8.58 5.355 8.205 5.315 7.775C5.285 7.335 5.26 6.89 5.24 6.44C5.22 5.98 5.21 5.58 5.21 5.24V0.0499997H6.92V11H4.625L1.61 2.15C1.63 2.44 1.655 2.79 1.685 3.2C1.715 3.61 1.74 4.03 1.76 4.46C1.78 4.89 1.79 5.285 1.79 5.645V11H0.0800001ZM13.8441 11V8.825H8.96914V6.11L13.1841 0.0499997H15.2841L10.7691 6.605V7.175H13.8441V4.7H15.7191V11H13.8441Z" fill="white"/>
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
      <KanjiBoxes tableName="n4_database_kanji" 
                  onError={(error) => setFetchError('Could Not Fetch Kanjis')}/>
      </div>
      <Footer />
    </div>
  )
}

export default N4