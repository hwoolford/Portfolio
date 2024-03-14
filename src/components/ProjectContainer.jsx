/* eslint-disable react/prop-types */
import "../components/ProjectContainer.css";
import githublogopink from "../../assets/githublogopink.png";

export default function ProjectContainer(props) {
  return (
    <div className="card">
      <a href={props.url} target="_blank" rel="noreferrer">
        <img className="projectImage" src={props.img} alt={props.alt}></img>
      </a>
      <h3>{props.title}</h3>
      <p>{props.desc}</p>
      <div className="githubContainer">
      <a href={props.repo} target="_blank" rel="noreferrer">
        <img
          className="githubLogo normal"
          src={githublogopink}
          alt="GitHub Project Repository"
        ></img>
      </a>
      </div>
    </div>
  );
}
