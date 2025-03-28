import React, { useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import supabase from '../../supabase';
import '../kanjiboxes/kanjiboxes.css'
import {AiOutlineClose} from 'react-icons/ai';
import { IoArrowForwardOutline } from "react-icons/io5";
import { FaLock } from "react-icons/fa";

interface Kanji {
    id: number;
    kanji: string;
    meaning?: string;
    onyomi?: string;
    kunyomi?: string;
    status?: boolean
}

interface KanjiBoxesProps {
    tableName: string;
    onError?: (error: any) => void;
}


const KanjiBox = ({ item, setSelectedKanji }: { item: Kanji; setSelectedKanji: (kanji: Kanji) => void }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      className={`box relative w-full aspect-square border-t-4 border-r-4 border-[#C8AA60] ${item.status ? 'box_blured locked' : ''}`}
      whileHover={{ scale: 1.10 }}
      whileTap={{ scale: 0.95 }}
      onClick={() => item.status ? '' : setSelectedKanji(item)}
    >
      <motion.h3 
        className="absolute inset-0 flex items-center justify-center flex-col gap-10"
        initial={false} 
        animate={{ opacity: isHovered ? 0 : 1 }}
      >
        <div className='text-[#18517a] text-2xl font-light'>
        {item.meaning || 'No Meaning'}  
        </div>  
        <div className='text-[#C8AA60] text-6xl font-light'>
        {item.kanji || 'No Title'}
        </div> 
      </motion.h3>
      <motion.h3
        className='bg-[#18517a] text-white rounded-[20px] absolute inset-0 flex items-center justify-center'
        initial={false} 
        animate={{ opacity: isHovered ? 1 : 0 }}
      >
        {item.meaning || 'No Meaning'}
      </motion.h3>
      <div 
        className="absolute inset-0 z-10"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      />
    </motion.div>
  );
};

function KanjiBoxes({ tableName, onError }: KanjiBoxesProps) {
  const [data, setData] = useState<Kanji[]>([]);
  const [selectedKanji, setSelectedKanji] = useState<Kanji | null>(null);

  const navigateKanji = (direction: number) => {
    const currentIndex = data.findIndex(k => k.id === selectedKanji?.id);
    const newIndex = (currentIndex + direction + data.length) % data.length;
    setSelectedKanji(data[newIndex]);
  };

  useEffect(() => {
    async function fetchData() {

      const { data , error} = await supabase
      .from(tableName)
      .select('*');
  
      if (error) {
        console.error('Could not fetch Data from Table' , error)
      }
      else {
        console.log('Fetched data:', data);
        setData(data);
      }
    }
    fetchData();
  }, [tableName, onError]);

  const modalVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { opacity: 1, scale: 1 },
    exit: { opacity: 0, scale: 0.8 }
  };

  return (
    <div className="box-container text-[#C8AA60] grid grid-cols-5 gap-3 p-2">
      {data && data.length > 0 ? (
        data.map((item) => (
          <KanjiBox key={item.id} item={item} setSelectedKanji={setSelectedKanji} />
        ))
      ) : (
        <p>No Data Available</p>
      )}
  <AnimatePresence>
    {selectedKanji && (
      <motion.div
        className="modal-overlay"
        exit={{ opacity: 0, scale: 1.1 }}
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        variants={modalVariants}
        onClick={() => setSelectedKanji(null)}>
        <motion.div
          className="modal-content"
          onClick={(e) => e.stopPropagation()}>
            <button className="nav-button left" onClick={() => navigateKanji(-1)}><IoArrowForwardOutline size={40} style={{transform: 'scaleX(-1)'}}/></button>
            <div className='w-[600px] h-[400px] border-red-500 border-2 border-solid flex flex-col'>
              <div className='flex flex-row border-2 border-yellow-400 border-solid'>
                <h2 className='text-9xl mb-1 self-start'>{selectedKanji.kanji}</h2>
                <h1 className='ml-auto'>Animated Strokes SVG</h1>
              </div>
              {/* <div className='flex flex-col flex-grow'> */}
                <div className='flex w-full mb-2  border-blue-500 border-2 border-solid mt-[100px]'>
                  <p>Onyomi: {selectedKanji.onyomi}</p>
                  <p className='ml-auto'>Kunyomi: {selectedKanji.kunyomi}</p>
                </div>
                <p className='flex-grow  border-green-500 border-2 border-solid'>Meaning: {selectedKanji.meaning}</p>
              </div>
            {/* </div> */}
            <button className="nav-button right" onClick={() => navigateKanji(1)}><IoArrowForwardOutline size={40}/></button>
            <button className="close-button" onClick={() => setSelectedKanji(null)}><AiOutlineClose size={40}/></button>
            {/* <button onClick={() => setSelectedKanji(null)}>Close</button> */}
        </motion.div>
      </motion.div>
  )}
  </AnimatePresence>
</div>);}

export default KanjiBoxes;