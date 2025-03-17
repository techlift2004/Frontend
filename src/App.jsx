
import './App.css'
import { BrowserRouter, Route, Routes } from "react-router-dom";
import LandingPage from './pages/landingpage';
import Contact from './pages/contact';
import Join from './pages/joinus';

function App() {
 

  return (
    <>
      
    <BrowserRouter>
    <Routes>
              <Route path="/" element={<LandingPage />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/join" element={<Join />} />
       </Routes>
    </BrowserRouter>
  
  </>
  )
}

export default App
