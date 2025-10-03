import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Contact from './components/Contact';
import NotFound from './components/Not_found_page';
import Blog from "./components/Blog";
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';
function App() {
  useEffect(() => {
    AOS.init({ 
      duration: 1000,  // animation duration in ms
      once: true,      // whether animation should happen only once
      offset: 100      // offset (in px) from the original trigger point
    });
  }, []);
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Hero />} />
        <Route path="/about" element={<About />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/skills" element={<Skills />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="*" element={<NotFound/>}/>
        <Route path="/blog" element={<Blog />} />
      </Routes>
    </Router>
  );
}

export default App;
