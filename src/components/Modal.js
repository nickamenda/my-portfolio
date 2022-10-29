

const Modal = (props) => {
  const { logo, setShowModal, showModal } = props;
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
          setShowModal(!showModal)
        }}>
          <icon className="fa fa-bars">&#9776;</icon>
        </a>
    </div>
  </>
  )
}
export default Modal;