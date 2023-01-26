import React from 'react';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Navbar from './Navbar';
import Footer from './Footer';
import Home from './Home';
import Projects from './Projects';
import Experience from './Experience';
import Contact from './Contact';

function App() {
  return (
    <div> 
  <Navbar />
  

    <Router>
    <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/projects" element={<Projects />} />
    <Route path="/experience" element={<Experience />} />
    <Route path="/contact" element={<Contact />} />
    </Routes>
    </Router>

    <Footer />
    </div>
  )
}

export default App;
