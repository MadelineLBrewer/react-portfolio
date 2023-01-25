import React from 'react';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Home from './Home';
import Header from './Header';
import Footer from './Footer';
import Projects from './Projects';
import Experience from './Experience';

function App() {
  return (
    <div> 
  <Header />
  

    <Router>
    <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/projects" element={<Projects />} />
    <Route path="/experience" element={<Experience />} />
    </Routes>
    </Router>

    <Footer />
    </div>
  )
}

export default App;
