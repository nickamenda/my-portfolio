import me from '../IMG_5791.PNG'

const AboutMe = () => {
  return (
    <div id="aboutMe">
      <h1 className="about"><section>01.</section>About Me</h1>
      <div className="aboutMe container">
        <div className="aboutMe text">
      <div className="aboutMe intro"><p>Hi! My name is Nick Amenda and I enjoy  exploring all the new possibilities made possible with coding. I found my love for coding while at my last job and realized I needed something more stable and always had a huge interest in tech.</p></div>
      <div className="aboutMe exp"><p>I attended Hack Reactor bootcamp after teaching myself how to code in early 2022. Since learning to code I have worked with all kinds of different people. I have worked on many different projects solo, with friends, with classmates, with strangers and also in large groups. </p></div>
      </div>
      <div className="aboutMe pic">
        <img alt="me" className="photo" src={me}></img>
      </div>
      </div>
    </div>
  )
}

export default AboutMe;