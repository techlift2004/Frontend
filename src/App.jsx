
import './App.css'
import { BrowserRouter, Route, Routes } from "react-router-dom";
import LandingPage from './pages/landingpage';
import Contact from './pages/contact';
import Join from './pages/joinus';
import AboutPage from './pages/AboutPage';
import Events from './pages/Events';
import Blog from './pages/blog';
import PostPage from "./pages/seeblog"

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
          <Route path='/blog' element={<Blog />} />
          <Route path= "post/:slug" element= {<PostPage />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
