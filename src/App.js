import './App.css';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import N5 from './components/n5/n5.tsx'
import N4 from './components/n4/n4.tsx'
import N3 from './components/n3/n3.tsx'
import Home from './components/home/home.tsx'
import Quiz from './components/quiz/quiz.tsx'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/N5" element={<N5 />} />
        <Route path="/N4" element={<N4 />} />
        <Route path="/N3" element={<N3 />} />
        <Route path="/Quiz" element={<Quiz />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </BrowserRouter>
  );
}


export default App;