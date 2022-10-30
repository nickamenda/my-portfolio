import './App.css';
import Navbar from './components/Navbar.js'
import MainSection from './components/MainSection.js'
import AboutMe from './components/AboutMe.js'
import ContactMe from './components/ContactMe.js'
import Projects from './components/Projects.js'
import Work from './components/Work.js'

function App() {
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
