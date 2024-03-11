import '../components/Footer.css'
import githublogo from "../../assets/githublogo.png";
import githublogowhite from "../../assets/githublogowhite.png";
import linkedinlogo from "../../assets/linkedinlogo.png";
import linkedinlogowhite from "../../assets/linkedinlogowhite.png";
import stacklogo from "../../assets/stacklogo.png";
import stacklogowhite from "../../assets/stacklogowhite.png";

export default function Footer() {
    return (
      <footer className="footer">
        <div className="socialContainer">
          <a href="https://github.com/hwoolford" target="_blank" rel="noreferrer">
            <img
              className="socialLogo normal"
              src={githublogo}
              alt="GitHub Repo"
            ></img>
          </a>
          <a href="https://github.com/hwoolford" target="_blank" rel="noreferrer">
            <img
              className="socialLogo hover"
              src={githublogowhite}
              alt="GitHub Repo"
            ></img>
          </a>
        </div>
        <div className="socialContainer">
          <a
            href="https://www.linkedin.com/in/hwoolford/"
            target="_blank"
            rel="noreferrer"
          >
            <img
              className="socialLogo normal"
              src={linkedinlogo}
              alt="LinkedIn Page"
            ></img>
          </a>
          <a
            href="https://www.linkedin.com/in/hwoolford/"
            target="_blank"
            rel="noreferrer"
          >
            <img
              className="socialLogo hover"
              src={linkedinlogowhite}
              alt="LinkedIn Page"
            ></img>
          </a>
        </div>
        <div className="socialContainer">
          <a
            href="https://stackoverflow.com/users/23531312/forxtoisate"
            target="_blank"
            rel="noreferrer"
          >
            <img
              className="socialLogo normal"
              src={stacklogo}
              alt="Stackoverflow Page"
            ></img>
          </a>
          <a
            href="https://stackoverflow.com/users/23531312/forxtoisate"
            target="_blank"
            rel="noreferrer"
          >
            <img
              className="socialLogo hover"
              src={stacklogowhite}
              alt="Stackoverflow Page"
            ></img>
          </a>
        </div>
      </footer>
    );
  }
