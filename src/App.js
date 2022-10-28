import './App.css';
import Navbar from './components/Navbar.js'
import MainSection from './components/MainSection.js'
import AboutMe from './components/AboutMe.js'
import ContactMe from './components/ContactMe.js'
import Projects from './components/Projects.js'
import Work from './components/Work.js'
// import React, { useState, useEffect } from 'react';

function App() {
  // const [showNav, setShowNav] = useState(true)
  // const [showMain, setShowMain] = useState(true)
  // const [showAbout, setShowAbout] = useState(false)
  // const [showProjects, setShowProjects] = useState(false)
  // const [showWork, setShowWork] = useState(false)
  // const [showContact, setShowContact] = useState(false)
  return (
    <div className="App">
      <Navbar />
      <MainSection />
      <AboutMe />
      <Projects />
      <Work />
      <ContactMe />
    </div>
  );
}

export default App;
