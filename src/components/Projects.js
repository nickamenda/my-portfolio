import sorting from '../Sorting.png'

const Projects = () => {
  return (
    <div id="projects">
      <h1 className="projects"><section>02.</section>Projects</h1>
      <div className="projects-intro"><p>While attending the Hack Reactor bootcamp, I worked on many different projects whether it be solo, in pairs or in larger groups of 3-4. I have also worked on quite a few personal projects. Below are some of the projects I have worked on, I would love for you to check them out!</p></div>
      <li className="projects-container">
        <ul>
          <section><a href="#">Sorting Algorithm Visualizer</a></section>
          <div className="sorting">
            <p>This is a personal project I worked on with one of my good friends. This visualizer creates a visual depiction of 4 different sorting algorithms. We used a mix of HTML, CSS, and JS to build this visualizer. There are options to change the speed of the algorithm, input how many bars you want shown, and what algorithm you would like to see. Please, feel free to give it a try!</p>
            <img src={sorting} className="sortingSS"></img>
          </div>
        </ul>
        <ul>
          <section><a href="#">Frontend Capstone</a></section>
          <div className="fec">
            <p>This is a 2-week project I also worked on while attending Hack Reactor's bootcamp. We were provided a wireframe of the site design and a business requirements document and were tasked with building the entire app from scratch and deploying it to AWS. I worked in a team of 3 and I took on the role of building out the product overview module which is the first thing you see when going to the site.</p>
            <img src="#" className="fecSS"></img>
          </div>
        </ul>
        <ul>
          <section><a href="#">Recastly</a></section>
          <div className="recastly">
            <p>This was a 2 day sprint I worked on during my time at Hack Reactor's immersive bootcamp. We were provided the CSS and HTML for this app but had to interact with Youtube's API to get the videos to show, play, and be able to search through Youtube videos. Go ahead and try it out!</p>
            <img src="#" className="recastlySS"></img>
          </div>
        </ul>
        <ul>
          <section><a href="#">CS:GO Stat Tracker</a></section>
          <div className="csgo">
            <p>This is a personal project that I worked on when I had some free time during my time at Hack Reactor. This was more of a passion project to practice interacting with API's, using React, and styling with CSS. You can input a user's Steam64ID and as long as they have a public profile, it will get all the information about that user. If you or anyone you know plays CS:GO please, give it a try!</p>
            <img src="#" className="csgoSS"></img>
          </div>
        </ul>
      </li >
    </div >
  )
}

export default Projects;