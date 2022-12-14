import logo from '../resources/Logo-light.png'
import React from 'react';
import Resume from '../resources/Nick Amenda Resume.pdf'

const Navbar = () => {
  const openMenu = () => {
    var x = document.getElementById("myNavbar");
    if (x.className === "navbar") {
      x.className += " responsive";
    } else {
      x.className = "navbar";
    }
    var y = document.getElementById("myLinks");
    if (y.className === "links") {
      y.className += " responsive";
    } else {
      y.className = "links";
    }
  };
  const closeMenu = () => {
    document.getElementById("myLinks").className = "links"
  }

  return (
    <>
      <div className="navbar hidden" id="myNavbar" >
        <img className="logo" src={logo} alt="my logo"></img>
        <div className="links" id="myLinks">
          <a href="#aboutMe" onClick={() => closeMenu()}><section>01.</section>About</a>
          <a href="#projects" onClick={() => closeMenu()}><section>02.</section>Projects</a>
          <a href="#work" onClick={() => closeMenu()}><section>03.</section>Work</a>
          <a href="#contactMe" onClick={() => closeMenu()}><section>04.</section>Contact Me!</a>
          <a className="resume" href={Resume} target="_blank" rel="noreferrer" onClick={() => closeMenu()}>Resume</a>
        </div>
          <a href="#" className="icon" onClick={(e) => {
            e.preventDefault()
            openMenu()
          }}>
            <div className="fa fa-bars">&#9776;</div>
          </a>
      </div>
    </>
  )
}

export default Navbar;