import CSS from '../resources/CSS.png'
import reactImg from '../resources/ReactImg.png'
import SQL from '../resources/SQL.png'
import Mongo from '../resources/Mongo.png'
import JS from '../resources/JS.png'
import HTML from '../resources/HTML.png'
import AWS from '../resources/AWS.png'

const MainSection = () => {
  return (
    <div className="main hidden">
      <div className="intro">Hi, my name is</div>
      <div className="name">Nick Amenda.</div>
      <div className="info">I create things for the web.</div>
      <div className="description"><p>I am a passionate full-stack software engineer who specializes in building amazing every day experiences for people who use the internet! I truly enjoy making the internet seamless for the end-user.</p> </div>
      <div>Over the course of a year I have become proficient with many different skills and languages.</div>
      <div className="aboutMe skills">
        <div className="JS">
          <a href="https://www.javascript.com/" target="_blank" rel="noreferrer"><img src={JS} alt="js logo"></img></a>
        </div>
        <div className="CSS">
          <a href="https://en.wikipedia.org/wiki/CSS" target="_blank" rel="noreferrer"><img src={CSS} alt="css logo"></img></a>
        </div>
        <div className="HTML">
          <a href="https://en.wikipedia.org/wiki/HTML" target="_blank" rel="noreferrer"><img src={HTML} alt="html logo"></img></a>
        </div>
        <div className="reactImg">
          <a href="https://reactjs.org/" target="_blank" rel="noreferrer"><img src={reactImg} alt="react logo"></img></a>
        </div>
        <div className="AWS">
          <a href="https://aws.amazon.com/" target="_blank" rel="noreferrer"><img alt="aws logo" src={AWS}></img></a>
        </div>
        <div className="SQL">
          <a href="https://www.mysql.com/" target="_blank" rel="noreferrer"><img src={SQL} alt="sql logo"></img></a>
        </div>
        <div className="Mongo">
          <a href="https://www.mongodb.com/" target="_blank" rel="noreferrer"><img src={Mongo} alt="mongoDB logo"></img></a>
        </div>
      </div>
    </div>
  )
}

export default MainSection;