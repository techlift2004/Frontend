// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'
import { BrowserRouter, Route, Routes } from "react-router-dom";
import LandingPage from './pages/langing';

function App() {
 

  return (
    <>
      
    <BrowserRouter>
    <Routes>
              <Route path="/" element={<LandingPage />} />
              {/* <Route path="/contact" element={<Contact />} /> */}
       </Routes>
    </BrowserRouter>
  
  </>
  )
}

export default App
