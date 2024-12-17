import React from 'react'
import { useState} from 'react'
import Navbar from '../navbar/navbar.tsx'
import Footer from '../footer/footer.tsx'
import supabase from '../../supabase.js'
import KanjiBoxes from '../kanjiboxes/kanjiboxes.tsx'

const N3 = () => {
  console.log(supabase)

  const [fetchError, setFetchError] = useState<string | null>(null)

  return (
    <div>
      <Navbar />
      <div className='text-white min-h-screen bg-[url("./images/Fuji_img.jpg")] bg-cover bg-center'>
        <div className='max-w-[800px] bg-transparent h-[600px] mx-auto text-center flex flex-col justify-center items-center'>
          <div className='flex justify-center w-full mb-3'>
            <svg width="600" height="200" viewBox="0 0 16 12" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path className='Animated-class' d="M0.0800001 11V0.0499997H2.375L5.42 8.9C5.39 8.58 5.355 8.205 5.315 7.775C5.285 7.335 5.26 6.89 5.24 6.44C5.22 5.98 5.21 5.58 5.21 5.24V0.0499997H6.92V11H4.625L1.61 2.15C1.63 2.44 1.655 2.79 1.685 3.2C1.715 3.61 1.74 4.03 1.76 4.46C1.78 4.89 1.79 5.285 1.79 5.645V11H0.0800001ZM12.3891 11.15C11.6791 11.15 11.0591 11.02 10.5291 10.76C10.0091 10.5 9.60414 10.135 9.31414 9.665C9.02414 9.195 8.87914 8.64 8.87914 8H10.7691C10.7691 8.49 10.9091 8.875 11.1891 9.155C11.4791 9.425 11.8841 9.56 12.4041 9.56C12.9241 9.56 13.3241 9.42 13.6041 9.14C13.8841 8.86 14.0241 8.48 14.0241 8V7.145C14.0241 6.655 13.8841 6.275 13.6041 6.005C13.3241 5.725 12.9241 5.585 12.4041 5.585H11.1741V3.89L13.5891 1.655H9.37414V0.0499997H15.4941V1.745L12.4041 4.58V3.98C13.4841 3.98 14.3391 4.265 14.9691 4.835C15.5991 5.405 15.9141 6.175 15.9141 7.145V8C15.9141 8.64 15.7691 9.195 15.4791 9.665C15.1891 10.135 14.7791 10.5 14.2491 10.76C13.7191 11.02 13.0991 11.15 12.3891 11.15Z" fill="white"/>
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
      <KanjiBoxes tableName="n3_database_kanji" 
                  onError={(error) => setFetchError('Could Not Fetch Kanjis')}/>
      </div>
      <Footer />
    </div>
  )
}

export default N3