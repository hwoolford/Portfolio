import "../Download/Download.css";
import resume from '../../assets/resume2024.pdf'

export default function Download() {
  return (
    <div className="container">
      <a className="btn" href={resume} download="hwoolford-resume.pdf">
        Download Resume
      </a>
    </div>
  );
}
