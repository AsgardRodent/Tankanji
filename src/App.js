import './App.css';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Home from './Components/home/home.tsx'
// import Levels from './Components/levels/levels.jsx';
import N5 from './Components/levels/n5/n5.jsx'
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} /> 
        {/* <Route path='/SignUp' element={<SignUp />} /> */}
        {/* <Route path="/" element={<Signin/>} /> */}
        <Route path='/levels' element={<N5/>} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </BrowserRouter>
  );
}


export default App;