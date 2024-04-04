import "./Home.css";
import Portrait from "../../assets/portrait.png";
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';


export default function FullWidthGrid() {
  return (
    <div className="home">
    <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={3}
      direction="row"
      justifyContent="space-evenly"
      alignItems="center"
      >
        <Grid item xs={12} md={6}
        className="textContainer">
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
              a passion for learning.
            </p>
            <div className="btnContainer">
              <a className="button" href="./Projects">
                View My Work
              </a>
              <a className="button" href="./Contact">
                Contact Me
              </a>
            </div>
        </Grid>
        <Grid item xs={12} md={6}
        className="imgContainer"
        container
        justifyContent="center"
        alignItems="flex-end"
        >
          <img src={Portrait} alt="portrait" className="portrait" style={{ maxWidth: "100%", height: "auto" }}/>
        </Grid>
      </Grid>
    </Box>
    </div>
  );
}