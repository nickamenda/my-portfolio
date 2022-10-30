import linked from '../resources/linked.png'
import Github from '../resources/Github.png'

const ContactMe = () => {
  return (
    <div id="contactMe" className="hidden">
      <h1 className="contact"><section>04.</section>Get in Touch!</h1>
      <div className="contact-container">
        <div className="contactInfo">I am currently looking for a job in the software engineering field! If anything on my portfolio has peaked your interest please, feel free to contact me!</div>
        <div className="contactInfoLinks">
          <a className="email" href="mailto:nickamenda@gmail.com" target="_blank" rel="noreferrer"><button>Email me!</button></a>
          <a href="https://www.linkedin.com/in/nicholas-amenda-64bb31238/" target="_blank" rel="noreferrer"className="linkedin"><img src={linked}></img></a>
          <a href="https://github.com/nickamenda/SortingAlgoVisual" target="_blank" className="github"><img  src={Github}></img></a>

        </div>
      </div>
    </div>
  )
}

export default ContactMe;