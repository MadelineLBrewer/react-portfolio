import React from 'react';
import { HashRouter, Routes, Route } from 'react-router-dom';

import Header from "./COMPONENTS/HEADER/Header";
import Home from "./COMPONENTS/PAGES/HOME/Home";
import Footer from './COMPONENTS/FOOTER/Footer';
import Contact from './COMPONENTS/PAGES/CONTACT/Contact';
import JCAA from './COMPONENTS/PAGES/JCAA/Jcaa'
import "./App.css";
import Projects from "./COMPONENTS/Projects";

function App() {



  return (
    <div id="madeline" className="App"> 

    <HashRouter forceRefresh={true}>
    <Header />

    {/* site content renders here */}
    <main>
    <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/Jcaa/" element={<JCAA />} />
    <Route path="/projects" element={<Projects />} />
    <Route path="/contact" element={<Contact />} />
    </Routes>
    </main>

    {/* <Projects /> */}


    <Footer />

    </HashRouter>
    </div>
  )
}

export default App;
