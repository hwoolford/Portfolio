import "./ContactInfo.css";
import { Typography, Button } from "@mui/material/";
import EmailIcon from "@mui/icons-material/Email";
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

export default function ContactInfo() {
  return (
    <div className="contact-info-holder">
    <h2 className="contact-me">Contact Me</h2>
      <Typography variant="h1" fontSize="3.5rem" fontFamily="Quicksand">
        Heather Woolford
      </Typography>
      <Button
      className="contact-details"
        startIcon={<EmailIcon style={{ fontSize: "2.5rem" }} />}
      >
        hwoolford@gmail.com
      </Button>
      <br />
      <Button
      className="contact-details"
        startIcon={<GitHubIcon style={{ fontSize: "2.5rem" }} />}
      >
        github.com/hwoolford
      </Button>
      <br />
      <Button
      className="contact-details"
        startIcon={<LinkedInIcon style={{ fontSize: "2.5rem" }} />}
      >
        linkedin.com/in/hwoolford
      </Button>
    </div>
  );
}
