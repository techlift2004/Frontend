
import './App.css'
import { BrowserRouter, Route, Routes } from "react-router-dom";
import LandingPage from './pages/landingpage';

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
