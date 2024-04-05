import "./ContactInfo.css";
import { Typography, Button, Box } from "@mui/material/";
import EmailIcon from "@mui/icons-material/Email";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";

export default function ContactInfo() {
  const email = "hwoolford@gmail.com";
  const github = "https://github.com/hwoolford";
  const linkdin = "https://www.linkedin.com/in/hwoolford/";
  
  return (
    <div className="contact-info-holder">
      <h2 className="contact-me">Connect with Me</h2>
      <Box container="true" noValidate autoComplete="off" sx={{ flexGrow: 1 }}>
        <Typography variant="h1" fontSize="3.5rem" fontFamily="Quicksand">
          Heather Woolford
        </Typography>
        <Button
          className="contact-details"
          startIcon={<EmailIcon style={{ fontSize: "2.5rem" }} />}
          component="a"
          href={`mailto:${email}`}
        >
          hwoolford@gmail.com
        </Button>
        <br />
        <Button
          className="contact-details"
          startIcon={<GitHubIcon style={{ fontSize: "2.5rem" }} />}
          component="a"
          href={github}
          target="_blank"
          rel="noreferrer"
        >
          github.com/hwoolford
        </Button>
        <br />
        <Button
          className="contact-details"
          startIcon={<LinkedInIcon style={{ fontSize: "2.5rem" }} />}
          component="a"
          href={linkdin}
          target="_blank"
          rel="noreferrer"
        >
          linkedin.com/in/hwoolford
        </Button>
      </Box>
    </div>
  );
}
