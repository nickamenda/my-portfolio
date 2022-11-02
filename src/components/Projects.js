import sorting from '../resources/Sorting.png'
import fec from '../resources/Fec.png'
import Github from '../resources/Github.png'

const Projects = () => {
  return (
    <div id="projects" className="hidden">
      <h1 className="projects"><section>02.</section>Projects</h1>
      <div className="projects-intro"><p>While attending Hack Reactor's bootcamp, I have worked on many different projects whether it be solo, in pairs or in large groups. I have also worked on quite a few personal projects when I have some spare time. Below are just a couple of the projects I have worked on, I would love for you to check them out!</p></div>
      <li className="projects-container">
        <ul>
          <section><a href="./sortingalgo">Sorting Algorithm Visualizer</a>
              <a href="https://github.com/nickamenda/SortingAlgoVisual" target="_blank" rel="noreferrer"><img className="github" src={Github}alt="Github logo"></img></a>
          </section>
          <div className="sorting">
            <div className="projectDesc">This is a personal project I worked on with one of my good friends. This visualizer creates a visual depiction of 4 different sorting algorithms. We used a mix of HTML, CSS, and JS to build this visualizer. There are options to change the speed of the algorithm, input how many bars you want shown, and what algorithm you would like to see. Click the project title or the image to give it a try!</div>
            <a href="./sortingalgo"><img src={sorting} className="sortingSS" alt="Screenshot of my sorting visualizer"></img></a>
          </div>
        </ul>
        <ul>
          <section><a href="https://nicks2209fec.herokuapp.com/" target="_blank" rel="noreferrer">Frontend Capstone</a>
          <a href="https://github.com/nickamenda/FEC" target="_blank" rel="noreferrer"><img className="github" src={Github} alt="Github logo"></img></a>
          </section>
          <div className="fec">
            <div className="projectDesc">This was a group project we worked on while attending Hack Reactor. Our team was given only a wireframe and business requirements, and from that had to create a mock e-commerce product page and deploy it using AWS. Over the course of this project we all got more experience with React, Webpack, AWS, CSS, Jest, Express, npm, git workflow, and plain JS. Click the project title or the image to give it a try! {'(This project is hosted on heroku so it may take a second to load.)'}</div>
            <a href="https://nicks2209fec.herokuapp.com/" target="_blank" rel="noreferrer"><img src={fec} className="fecSS" alt="Screenshot of my front-end capstone"></img></a>
          </div>
        </ul>
      </li >
    </div >
  )
}

export default Projects;
