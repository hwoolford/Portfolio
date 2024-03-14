import "../components/Download.css";
import resume from "../../assets/hwoolford-resume.pdf";

export default function Download() {
    return (
        <div className="container">
            <a href={resume} className="btn" download="hwoolford-resume.pdf">Download Resume</a>
        </div>
    )
}