import logo from '../Logo.png'
const Navbar = () => {
  return (
    <>
      <div className="navbar">
        <img className="logo" src={logo}></img>
        <div className="links">
          <a href="#aboutMe"><section>01.</section>About</a>
          <a href="#projects"><section>02.</section>Projects</a>
          <a href="#work"><section>03.</section>Work</a>
          <a href="#contactMe"><section>04.</section>Contact Me!</a>
          <button href="#">Resume</button>
        </div>
      </div>
    </>
  )
}

export default Navbar;