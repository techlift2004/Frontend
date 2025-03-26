
import './App.css'
import { BrowserRouter, Route, Routes } from "react-router-dom";
import LandingPage from './pages/landingpage';
import Contact from './pages/contact';
import Join from './pages/joinus';
import AboutPage from './pages/AboutPage';
import Events from './pages/Events';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/join" element={<Join />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path='/events' element={<Events />} />
          {/* <Route path="*" element={<h1>404 Not Found</h1>} /> */}
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
