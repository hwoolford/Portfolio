import Download from "../../components/DownloadResume/Download"
import "../Resume/Resume.css";

export default function Resume() {
  return (
    <div className="resume">
      <h1 className="page-title">Technical Skills</h1>
      <div className="skills d-flex flex-row justify-content-center">
        <div className="frontend col-md-6 col-sm-12 text-center">
          <h2 className="resume-heading">FRONT-END</h2>
          <ul>
            <li>HTML</li>
            <li>CSS</li>
            <li>JavaScript</li>
            <li>JQuery</li>
            <li>React</li>
            <li>Bootstrap</li>
          </ul>
        </div>
        <div className="backend col-md-6 col-sm-12 text-center">
          <h2 className="resume-heading">BACK-END</h2>
          <ul>
            <li>Node</li>
            <li>Express</li>
            <li>mySQL, Sequilize</li>
            <li>MongoDB, Mongoose</li>
            <li>GraphQL</li>
            <li>APIs</li>
          </ul>
        </div>
      </div>
      <Download />
    </div>
  );
}
