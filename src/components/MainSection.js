import CSS from '../CSS.png'
import reactImg from '../ReactImg.png'
import SQL from '../SQL.png'
import Mongo from '../Mongo.png'
import JS from '../JS.png'
import HTML from '../HTML.png'

const MainSection = () => {
  return (
    <div className="main">
      <div className="intro">Hi, my name is</div>
      <div className="name">Nick Amenda.</div>
      <div className="info">I create things for the web.</div>
      <div className="description"><p>I am a software engineer who specializes in building amazing every day experiences for people who use the internet! I truly enjoy making the internet seamless for the end-user.</p> </div>
      <div>Over the course of a year I have learned many different skills and languages</div>
      <div className="aboutMe skills">
        <div className="JS">
          <img src={JS}></img>
        </div>
        <div className="CSS">
          <img src={CSS}></img>
        </div>
        <div className="HTML">
          <img src={HTML}></img>
        </div>
        <div className="reactImg">
          <img src={reactImg}></img>
        </div>
        <div className="SQL">
          <img src={SQL}></img>
        </div>
        <div className="Mongo">
          <img src={Mongo}></img>
        </div>
      </div>
    </div>
  )
}

export default MainSection;