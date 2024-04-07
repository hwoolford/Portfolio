import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

export default function Technologies() {
  return (
    <>
      <div>
      <h1 className="about-section-title">Technologies</h1>
        <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon sx={{ color: "#ef0d8d" }} />}
            aria-controls="panel1-content"
            id="panel1-header"
            className="techno-titles"
          >
            Front-End Development
          </AccordionSummary>
          <AccordionDetails className="techno-details" id="panel1-details">
            HTML, CSS, JavaScript, jQuery, Bootstrap, MaterialUI, React
          </AccordionDetails>
        </Accordion>
        <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon sx={{ color: "#ef0d8d" }} />}
            aria-controls="panel2-content"
            id="panel2-header"
            className="techno-titles"
          >
            Back-End Development
          </AccordionSummary>
          <AccordionDetails className="techno-details" id="panel2-details">
            Node.js, Express.js, GraphQL, JWT
            </AccordionDetails>
        </Accordion>
        <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon sx={{ color: "#ef0d8d" }} />}
            aria-controls="panel3-content"
            id="panel3-header"
            className="techno-titles"
          >
            Database Technologies
          </AccordionSummary>
          <AccordionDetails className="techno-details" id="panel3-details">
            MySQL, MySQL Workbench, Sequelize, Mongoose, MongoDB
          </AccordionDetails>
        </Accordion>
        <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon sx={{ color: "#ef0d8d" }} />}
            aria-controls="panel4-content"
            id="panel4-header"
            className="techno-titles"
          >
            Development Tools & Utilities
          </AccordionSummary>
          <AccordionDetails className="techno-details" id="panel4-details">
            Git, GitHub, Slack, Insomnia, Visual Studio Code
          </AccordionDetails>
        </Accordion>
        <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon sx={{ color: "#ef0d8d" }} />}
            aria-controls="panel5-content"
            id="panel5-header"
            className="techno-titles"
          >
            Deployment & Hosting
          </AccordionSummary>
          <AccordionDetails className="techno-details" id="panel5-details">
            Heroku, Render, Netlify, GitHub Pages
          </AccordionDetails>
        </Accordion>
      </div>
    </>
  );
}
