import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import N5 from './components/n5/n5.tsx'
import N4 from './components/n4/n4.tsx'
import N3 from './components/n3/n3.tsx'
import Home from './components/home/home.tsx'
//import Quiz from './components/quiz/quiz.tsx'
// import Landing from './components/landing.jsx'


function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path="/N5" element={<N5 />} />
        <Route path='/N4' element={<N4 />}/>
        <Route path='/N3' element = {<N3 />} /> 
        {/* <Route path="/Quiz" element={<Quiz />}/> */}
      </Routes>
    </Router>
  );
}

export default App;