import {useEffect} from 'react'
import './App.css';
import Navbar from './components/Navbar.js'
import MainSection from './components/MainSection.js'
import AboutMe from './components/AboutMe.js'
import ContactMe from './components/ContactMe.js'
import Projects from './components/Projects.js'
import Work from './components/Work.js'

function App() {
  function animateScroll() {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('show')
        } else {
          entry.target.classList.remove('show')
        }
      })
    })
    const hiddenElements = document.querySelectorAll('.hidden')
    hiddenElements.forEach((el) => {
      observer.observe(el)
    })
  }
  useEffect(() => {
    animateScroll()
  }, [])
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
