import React from 'react'
// import { useState,useEffect } from 'react'
import Navbar  from '../navbar/navbar.tsx'
import Footer from '../footer/footer.tsx'
import '../quiz/quiz_landing.css'
// import supabase from '../../supabase.js'



const Quiz = () => {
    return (
        <div>
            <Navbar />
            <div className="Under_dev flex flex-col justify-between h-[700px] mx-auto my-auto w-[800px]">
                <div className="flex-grow bg-cover bg-center bg-no-repeat" style={{backgroundImage: `url('../../images/bobby_2.png')`}}></div>
                <div className="p-4 flex items-center justify-center">
                    <p className="text-5xl text-white">Still in Development</p>
                </div>
            </div>
            <Footer/>
        </div>
    )
}

export default Quiz

// //     const [getQuestion, setQuestion] = useState(null)
// //     const [getError, setError] = useState(null)
// //     const [getOptions, setOptions] = useState(null)
// //     const [isCorrect, setIsCorrect] = useState(null)
    
// //     useEffect(() => {
// //         const fetchData = async () => {
// //             try {
// //                 // Get total count
// //                 const { count } = await supabase
// //                     .from('n5_database_kanji')
// //                     .select('*', { count: 'exact', head: true })
                
// //                 // Get random question
// //                 const randomOffset = Math.floor(Math.random() * count)
// //                 const { data: questionData, error: questionError } = await supabase
// //                     .from('n5_database_kanji')
// //                     .select('*')
// //                     .limit(1)
// //                     .range(randomOffset, randomOffset)

// //                 if (questionError) throw questionError
                
// //                 // Get options after question is set
// //                 if (questionData && questionData[0]) {
// //                     const { data: wrongOptions, error: wrongError } = await supabase
// //                         .from('n5_database_kanji')
// //                         .select('*')
// //                         .neq('id', questionData[0].id)
// //                         .order('id', { ascending: Math.random() < 0.5 })
// //                         .limit(3)

// //                     if (wrongError) throw wrongError

// //                     const allOptions = [...wrongOptions, questionData[0]]
// //                     const shuffledOptions = allOptions.sort(() => Math.random() - 0.5)
                    
// //                     setQuestion(questionData)
// //                     setOptions(shuffledOptions)
// //                 }
// //             } catch (error) {
// //                 console.error('Error:', error)
// //                 setError('Could Not Fetch Quiz Data')
// //             }
// //         }

// //         fetchData()
// //     }, [])

// //     const answerClicked = (optionSelected) => {
// //         if (!getQuestion || !getQuestion[0]) return
        
// //         const correctAnswer = getQuestion[0].Meaning
// //         console.log('Selected:', optionSelected)
// //         console.log('Correct:', correctAnswer)
        
// //         if (optionSelected === correctAnswer) {
// //             setIsCorrect(true)
// //         } else {
// //             setIsCorrect(false)
// //         }
// //     }

//     return (
//         <div className="min-h-screen bg-blue-400">
//             <Navbar />
//             <div className="container mx-auto px-4 py-8">
//                 <div className="bg-white rounded-lg shadow-lg p-6 mb-6">
//                     <h1 className="text-2xl font-bold mb-4 text-center">Kanji Quiz</h1>
//                     {getError && (
//                         <p className="text-red-500 text-center">{getError}</p>
//                     )}
//                     {!getQuestion && (
//                         <p className="text-center">Loading question...</p>
//                     )}
//                     {getQuestion && getQuestion[0] && (
//                         <div className="text-center">
//                             <p className="text-6xl mb-8">{getQuestion[0].Kanji}</p>
//                             <p className="text-gray-600">Select the correct meaning:</p>
//                         </div>
//                     )}
//                 </div>

//                 <div className="grid grid-cols-2 gap-4">
//                     {getOptions && getOptions.map(option => (
//                         <button
//                             key={option.id}
//                             onClick={() => answerClicked(option.Meaning)}
//                             className="bg-white p-4 rounded-lg shadow hover:bg-gray-50 
//                                      transition-colors duration-200 text-black"
//                         >
//                             {option.Meaning}
//                         </button>
//                     ))}
//                 </div>

//                 {isCorrect !== null && (
//                     <div className={`mt-4 p-4 rounded-lg text-center ${
//                         isCorrect ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'
//                     }`}>
//                         <p className="text-xl">
//                             {isCorrect ? 'Correct! 正解!' : 'Incorrect. Try again! もう一度!'}
//                         </p>
//                     </div>
//                 )}
//             </div>
//             <Footer />
//         </div>
//     )
// }

// // import '../quiz/quiz.css';

// // const Quiz = () => {
// //   return (
// //     <div className="example-container">
// //       <motion.div whileHover={{ scale: 1.2 }} whileTap={{ scale: 0.8 }} />
// //     </div>
// //   );
// // };