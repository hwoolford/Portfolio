import "./Home.css";
import Portrait from "../../assets/portrait.png";

export default function Home() {
  return (
    <>
      <div className="home">
        <div className="main d-flex flex-row justify-content-center align-items-center">
          <div className="textContainer">
            <span className="hello">Hello,</span>
            <br />
            <span className="homeText">
              I am <span className="homeName">Heather Woolford</span>
              <br />
              Full Stack Web Developer
            </span>
            <p className="homeintro">
              Drawing from my background as an educator, I combine
              communication, problem-solving, and collaboration skills to create
              innovative web solutions, driven by a commitment to detail and
              ongoing learning.
            </p>
            <div className="btnContainer">
              <a className="btn work" href="./Projects">
                View My Work
              </a>
              <a className="btn contact" href="./Contact">
                Contact Me
              </a>
            </div>
          </div>
          <div className="imgContainer">
            <img src={Portrait} alt="portrait" className="portrait" />
          </div>
        </div>
      </div>
    </>
  );
}
