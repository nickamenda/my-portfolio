const Work = () => {
  return (
    <div id="work" className="hidden">
      <h1 className="work-experiences"><section>03.</section>Work Experience</h1>
      <div className="hack-reactor">
        <section className="time">2022-Present</section>
        <a href="https://www.hackreactor.com/" target="_blank" rel="noreferrer"><h3 className="company">Hack Reactor</h3></a>
        <div className="work-des" >I decided to transition in to web development just about 1 year ago, starting with self-teaching and then chooseing to attend Hack Reactor's bootcamp! Attending Hack Reactor has taught me so many new amazing skills. During this bootcamp we have worked solo, in pairs, and also in groups. The schedule is pretty rigorous with classes lasting 11 hours Mon-Fri and 8 hours on Saturday, but because of this I now have experience in JS, React, HTML, CSS, AWS, Postgres, MySQL, MongoDB, and Postgres!</div>
      </div>
      <div className="day-trading">
        <section className="time">2020-2022</section>
        <a href="https://en.wikipedia.org/wiki/Day_trading" target="_blank" rel="noreferrer"><h3 className="company">Day Trading</h3></a>
        <div className="work-des">Once leaving my past job I started work as a proffesional day trader. While in this field I gained experience in having full accountabilty of my work, making quick decisions under immense pressure, and dealing with stress when faced with constantly changing conditions.</div>
      </div>
      <div className="christofferson">
        <section className="time">2017-2020</section>
        <a href="https://www.christoffersonmoving.com/" target="_blank" rel="noreferrer"><h3 className="company">Christofferson Moving and Storage</h3></a>
        <div className="work-des">I worked as a professional mover for about 3 years, I learned many skills from this job including proper customer service, powering through when tired, and how to stay positive when placed in a bad situation.</div>
      </div>
    </div>
  )
}

export default Work;