import "../pages/Projects.css"

import ProjectContainer from "../components/ProjectContainer";
import wetmyplants from "../../assets/wetmyplants.png";
import storyseeker from "../../assets/storyseeker.png";
import weatherdashboard from "../../assets/weatherdashboard.png";
import codingquiz from "../../assets/codingquiz.png";
import workdayscheduler from "../../assets/workdayscheduler.png";
import passwordgenerator from "../../assets/passwordgenerator.png";

export default function Projects() {
    return (
        <div className="body container-flex">
            <h1 className="text-center heading">Projects</h1>
            <div className="projects">
           <div className="card-container">
           <ProjectContainer
            url="https://thawing-dawn-01968-1886d8c04121.herokuapp.com/"
            img={wetmyplants}
            alt="Wet My Plants App Screenshot"
            title="Wet My Plants"
            desc="Perenual API, node.js, express.js, bcrypt, mysql2, sequelize, express-handlebars"
            repo="https://github.com/CRNaro/group-project-02"
          />
           </div>
           <div className="card-container">
           <ProjectContainer
            url="https://hwoolford.github.io/storyseeker-for-biblio-cinephiles/"
            img={storyseeker}
            alt="StorySeeker App Screenshot"
            title="StorySeeker"
            desc="HTML, CSS, JavaScript, Bulma, OpenLibrary API, TMDB API"
            repo="https://github.com/hwoolford/storyseeker-for-biblio-cinephiles"
          />
           </div>
           <div className="card-container">
           <ProjectContainer
            url="https://hwoolford.github.io/weather-dashboard/"
            img={weatherdashboard}
            alt="Weather Dashboard App Screenshot"
            title="Weather Dashboard"
            desc="HTML, CSS, Bootstrap, JavaScript, JQuery, OpenWeather API"
            repo="https://github.com/hwoolford/weather-dashboard"
          />
           </div>
           <div className="card-container">
           <ProjectContainer
            url="https://hwoolford.github.io/multiple-choice-js-coding-quiz/"
            img={codingquiz}
            alt="Coding Quiz App Screenshot"
            title="Coding Quiz"
            desc="HTML, CSS, JavaScript"
            repo="https://github.com/hwoolford/multiple-choice-js-coding-quiz"
          />
           </div>
           <div className="card-container">
           <ProjectContainer
            url="https://hwoolford.github.io/work-day-scheduler/"
            img={workdayscheduler}
            alt="Workday Scheduler App Screenshot"
            title="Workday Scheduler"
            desc="HTML, CSS, JavaScript, JQuery, Day.js"
            repo="https://github.com/hwoolford/work-day-scheduler"
          />
           </div>
           <div className="card-container">
           <ProjectContainer
            url="https://hwoolford.github.io/password-generator/"
            img={passwordgenerator}
            alt="Password Generator App Screenshot"
            title="Password Generator"
            desc="HTML, CSS, JavaScript"
            repo="https://github.com/hwoolford/password-generator"
          />
           </div>
           </div>
        </div>
    )
}