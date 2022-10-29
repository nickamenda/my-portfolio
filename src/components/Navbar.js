import logo from '../resources/Logo.png'
import React, { useState } from 'react';
import Modal from './Modal.js'

const Navbar = () => {
  const [showModal, setShowModal] = useState(false)
  const myFunction = () => {
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

  return (
    <>
      <div className="navbar" id="myNavbar">
        <img className="logo" src={logo}></img>
        <div className="links" id="myLinks">
          <a href="#aboutMe"><section>01.</section>About</a>
          <a href="#projects"><section>02.</section>Projects</a>
          <a href="#work"><section>03.</section>Work</a>
          <a href="#contactMe"><section>04.</section>Contact Me!</a>
          <button href="#">Resume</button>
        </div>
          <a href="javascript:void(0);" className="icon" onClick={(e) => {
            e.preventDefault()
            myFunction()
            setShowModal(!showModal)
          }}>
            <icon className="fa fa-bars">&#9776;</icon>
          </a>
      </div>
    </>
  )
}

export default Navbar;