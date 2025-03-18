
import './App.css'
import { BrowserRouter, Route, Routes } from "react-router-dom";
import LandingPage from './pages/landingpage';
import Contact from './pages/contact';
import Join from './pages/joinus';
import AboutPage from './pages/AboutPage';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
              <Route path="/" element={<LandingPage />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/join" element={<Join />} />
              <Route path="/about" element={<AboutPage />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
