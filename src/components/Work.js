const Work = () => {
  return (
    <div id="work" className="hidden">
      <h1 className="work-experiences"><section>03.</section>Work Experience</h1>
      <div className="hack-reactor">
        <section className="time">2022-Present</section>
        <a href="https://www.hackreactor.com/" target="_blank" rel="noreferrer"><h3 className="company">Hack Reactor</h3></a>
        <div className="work-des" >I decided to transition in to web development just about 1 year ago! Attending Hack Reactor's immersive bootcamp has taught me so many different skills. During this bootcamp we worked solo, in pairs, and also in groups. The schedule was pretty rigorous with classes lasting 11 hours Mon-Fri and 8 hours on Saturday. I now have experience in JS, React, HTML, CSS, AWS, Postgres, MySQL, and MongoDB!</div>
      </div>
      <div className="day-trading">
        <section className="time">2020-2022</section>
        <a href="https://en.wikipedia.org/wiki/Day_trading" target="_blank" rel="noreferrer"><h3 className="company">Day Trading</h3></a>
        <div className="work-des">Once leaving my past job I started to work as a proffesional day trader. This job taught me lots of skills about accountabilty and how to deal with high-stress situations. Since starting the economy has taken quite a hit and the stock market is no longer as stable as it once was. test</div>
      </div>
      <div className="christofferson">
        <section className="time">2017-2020</section>
        <a href="https://www.christoffersonmoving.com/" target="_blank" rel="noreferrer"><h3 className="company">Christofferson Moving and Storage</h3></a>
        <div className="work-des">I worked as a proffesional mover for about 3 years, I learned many skills from this job including proper customer service, powering through when tired, and how to stay positive when placed in a bad situation. Once Covid-19 hit not too many people were moving or wanted people in their house so I had to move on and find something with more stable hours.</div>
      </div>
    </div>
  )
}

export default Work;