import sorting from '../resources/Sorting.png'
import fec from '../resources/Fec.png'
import Github from '../resources/Github.png'

const Projects = () => {
  return (
    <div id="projects" className="hidden">
      <h1 className="projects"><section>02.</section>Projects</h1>
      <div className="projects-intro"><p>While attending the Hack Reactor bootcamp, I worked on many different projects whether it be solo, in pairs or in larger groups of 3-4. I have also worked on quite a few personal projects. Below are some of the projects I have worked on, I would love for you to check them out!</p></div>
      <li className="projects-container">
        <ul>
          <section><a href="./sortingalgo" target="_blank" rel="noreferrer">Sorting Algorithm Visualizer</a>
              <a href="https://github.com/nickamenda/SortingAlgoVisual" target="_blank" rel="noreferrer"><img className="github" src={Github}alt="Github logo"></img></a>
          </section>
          <div className="sorting">
            <div className="projectDesc">This is a personal project I worked on with one of my good friends. This visualizer creates a visual depiction of 4 different sorting algorithms. We used a mix of HTML, CSS, and JS to build this visualizer. There are options to change the speed of the algorithm, input how many bars you want shown, and what algorithm you would like to see. Please, feel free to give it a try!</div>
            <a href="./sortingalgo" target="_blank" rel="noreferrer"><img src={sorting} className="sortingSS" alt="Screenshot of my sorting visualizer"></img></a>
          </div>
        </ul>
        <ul>
          <section><a href="https://nicks2209fec.herokuapp.com/" target="_blank" rel="noreferrer">Frontend Capstone</a>
          <a href="https://github.com/nickamenda/FEC" target="_blank" rel="noreferrer"><img className="github" src={Github} alt="Github logo"></img></a>
          </section>
          <div className="fec">
            <div className="projectDesc">This is a 2-week project I also worked on while attending Hack Reactor's bootcamp. We were provided a wireframe of the site design and a business requirements document and were tasked with building the entire app from scratch and deploying it to AWS. I worked in a team of 3 and I took on the role of building out the product overview module which is the first thing you see when going to the site.</div>
            <a href="https://nicks2209fec.herokuapp.com/" target="_blank" rel="noreferrer"><img src={fec} className="fecSS" alt="Screenshot of my front-end capstone"></img></a>
          </div>
        </ul>
      </li >
    </div >
  )
}

export default Projects;