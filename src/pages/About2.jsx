import "../pages/About2.css";
import Portrait from "../../assets/portraitoutline.png";
import { Box, Grid } from "@mui/material/";

export default function About2() {
  return (
    <>
    <h1 className="title">About Me</h1>
    <div className="about-container">
      <Box
        container="true"
        noValidate
        autoComplete="off"
        sx={{ flexGrow: 1 }}
      >
        <Grid container spacing={1} justifyContent="center">
          <Grid
            item
            xs={12}
            md={3}
            container
            justifyContent="center"
            alignItems="center"
          >
            <div className="imageContainer">
              <img className="portraitBlue" src={Portrait} alt="portrait" />
            </div>
          </Grid>
          <Grid
            item
            xs={12}
            md={9}
            container
            justifyContent="center"
            alignItems="center"
          >
            <div className="AboutContainer">
              <p className="about">
                As a former educator transitioning into the realm of
                full-stack web development, I bring a unique blend of skills
                and experiences to the table. Armed with a web development
                certificate from the University of New Hampshire, I am eager
                to merge my background in education with the fast-paced and
                dynamic field of web development.
                <br />
                <br />
                Throughout my career in education, I have finely honed my
                communication, problem-solving, and collaboration abilities,
                all of which I am excited to now apply to crafting innovative
                web solutions. Proficient in both front-end and back-end
                technologies, I possess a meticulous attention to detail and
                an insatiable drive for continuous learning.
                <br />
                <br />I am genuinely enthusiastic about leveraging my diverse
                experiences to embark on a fulfilling journey in the creation
                of impactful and user-centric web solutions.
              </p>
            </div>
          </Grid>
        </Grid>
      </Box>
    </div>
  </>
  );
}
