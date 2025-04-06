import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import LandingPage from './pages/landingpage';
import Contact from './pages/contact';
import Join from './pages/joinus';
import AboutPage from './pages/AboutPage';
import Events from './pages/Events';
import Blog from './pages/blog';
import PostPage from './pages/seeblog';
import Admin from './pages/Admin';
import NotFound from './pages/NotFound'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/join" element={<Join />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/post/:slug" element={<PostPage />} />
        <Route path="/events" element={<Events />} />
        <Route path="admin" element={<Admin />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
