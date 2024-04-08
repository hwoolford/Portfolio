import "../Home/Home.css";
import Portrait from "../../../assets/portrait-1.png";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";

export default function Home() {
  return (
    <div className="home">
      <Box sx={{ flexGrow: 1 }}>
        <Grid
          container
          spacing={3}
          direction="row"
          justifyContent="center"
          alignItems="center"
        >
          <Grid
            item
            xs={12}
            md={6}
            container
            justifyContent="center"
            alignItems="center"
            className="textContainer"
          >
            <Grid item xs={12}>
              {/* Nested grid item for better control */}
              <span className="hello">Hello,</span>
              <br />
              <span className="homeText">
                I am <span className="homeName">Heather Woolford</span>
                <br />
                Full Stack Web Developer
              </span>
              <p className="homeintro">
                Drawing from my background as an educator, I combine
                communication, problem-solving, and collaboration skills to
                create innovative web solutions, driven by a commitment to
                detail and a passion for learning.
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
          </Grid>
          <Grid
            item
            xs={12}
            md={6}
            className="imgContainer"
            container
            justifyContent="center"
          >
            <img
              src={Portrait}
              alt="portrait"
              className="portrait"
              style={{ maxWidth: "100%", height: "auto" }}
            />
          </Grid>
        </Grid>
      </Box>
    </div>
  );
}
