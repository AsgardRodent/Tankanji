import React, { useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import supabase from '../supabase';
import '../components/landing.css'

function DataBoxes() {
  const [data , setData] = useState([]);
  const [selectedKanji , setSelectedKanji] = useState(null);

  useEffect(() => {
    fetchData();
  }, []);

  async function fetchData() {

    const { data , error} = await supabase
    .from('n5_database_kanji')
    .select('*');

    if (error) {
      console.error('Could not fetch Data from Table' , error)
    }
    else {
      console.log('Fetched data:', data);
      setData(data);
    }
  }

  const modalVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { opacity: 1, scale: 1 },
    exit: { opacity: 0, scale: 0.8 }
  };

  return (
    <div className="box-container">
      {data && data.length > 0 ? (
        data.map((item) => (
        <motion.div
          key={item.id}
          className="box"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => setSelectedKanji(item)}
        >
          <h3>{item.kanji || 'No Title'}</h3>
          {/* <p>{item.meaning || 'No Description'}</p> */}
        </motion.div>
      ))
    ) : (
      <p>No Data Avaliable</p>
    )}
  <AnimatePresence>
    {selectedKanji && (
      <motion.div
        className="modal-overlay"
        initial="hidden"
        animate="visible"
        exit="exit"
        variants={modalVariants}
        onClick={() => setSelectedKanji(null)}>
        <motion.div
          className="modal-content"
          onClick={(e) => e.stopPropagation()}>
            <h2>{selectedKanji.kanji}</h2>
            <p>Meaning: {selectedKanji.meaning}</p>
            <p>Onyomi: {selectedKanji.onyomi}</p>
            <p>Kunyomi: {selectedKanji.kunyomi}</p>
            <button onClick={() => setSelectedKanji(null)}>Close</button>
        </motion.div>
      </motion.div>
  )}
  </AnimatePresence>
</div>);}

export default DataBoxes;