import PropTypes from "prop-types";
import {
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  CardMedia,
  Grid,
  styled,
  Typography,
} from "@mui/material";
import Color from "color";
import "../pages/Projects2.css";
import wetmyplants from "../../assets/wetmyplants.png";
import storyseeker from "../../assets/storyseeker.png";
import weatherdashboard from "../../assets/weatherdashboard.png";
import codingquiz from "../../assets/codingquiz.png";
import workdayscheduler from "../../assets/workdayscheduler.png";
import cpms from "../../assets/cpms.png";

const CardActionAreaActionArea = styled(CardActionArea)(() => ({
  borderRadius: 16,
  transition: "0.2s",
  "&:hover": {
    transform: "scale(1.1)",
  },
}));

const StyledCard = styled(Card)(({ color }) => ({
  minWidth: 256,
  border: "white 2px solid",
  borderRadius: 16,
  boxShadow: "none",
  "&:hover": {
    boxShadow: `0 6px 12px 0 ${Color(color).rotate(-12).darken(0.2).fade(0.5)}`,
  },
}));

const CardContentContent = styled(CardContent)(({ color }) => {
  return {
    backgroundColor: color,
    padding: "1rem 1.5rem 1.5rem",
  };
});

const TypographyTitle = styled(Typography)(() => ({
  fontFamily: "Francois One",
  fontSize: "1.75rem",
  color: "#fff",
  textTransform: "uppercase",
  textAlign: "center",
}));

const TypographySubtitle = styled(Typography)(() => ({
  color: "#fff",
  opacity: 0.87,
  marginTop: "1rem",
  fontWeight: 500,
  fontSize: ".9rem",
  textAlign: "center",
}));

const ButtonLink = styled("a")(({ color }) => ({
  display: "inline-block",
  backgroundColor: color,
  padding: "0.5rem",
  color: "#fff",
  textDecoration: "none",
  textTransform: "uppercase",
  textAlign: "center",
  fontFamily: "Francois One",
  fontStyle: "normal",
  fontSize: "1.65rem",
  width: "33%",
  borderRadius: 8,
  transition: "background-color 0.3s",
  "&:hover": {
    border: "white solid 2px",
  },
}));

const CustomCard = ({ color, image, title, subtitle, deploy, repo }) => (
  <CardActionAreaActionArea>
    <StyledCard color={color}>
      <a href={deploy} target="_blank" rel="noreferrer">
        <CardMedia
          image={image}
          sx={{
            width: "100%",
            height: 0,
            paddingBottom: "50%",
            backgroundColor: "rgba(0,0,0,0.08)",
          }}
        />
      </a>
      <CardContentContent color={color}>
        <TypographyTitle variant={"h2"}>{title}</TypographyTitle>
        <TypographySubtitle>{subtitle}</TypographySubtitle>
      </CardContentContent>
    </StyledCard>
    <CardActions>
        <div className="btn-container">
    <ButtonLink href={deploy} target="_blank" rel="noreferrer" color={color}>
        View Site
      </ButtonLink>
      <ButtonLink href={repo} target="_blank" rel="noreferrer" color={color}>
        View Repo
      </ButtonLink>
      </div>
    </CardActions>
  </CardActionAreaActionArea>
);

export default function Projects() {
  return (
    <div className="main-container">
      <h1 className="heading">Projects</h1>
      <Grid className="grid-container" container spacing={4}>
        <Grid item className="project-container">
          <CustomCard
            color={"#c75a46"}
            title={"Corporate Project Management System"}
            subtitle={
              "MongoDB, Express.js, React, Node.js, MaterialUI, JSON Web Token, bcrypt, DayJS"
            }
            image={cpms}
            deploy={"https://final-project-qomg.onrender.com/"}
            repo={"https://github.com/hwoolford/final-project"}
          />
        </Grid>
        <Grid item className="project-container">
          <CustomCard
            color={"#5e877f"}
            title={"Wet My Plants"}
            subtitle={
              "Perenual API, Node.js, Express.js, bcrypt, mySQL2, Sequelize, Handlebars"
            }
            image={wetmyplants}
            deploy={"https://thawing-dawn-01968-1886d8c04121.herokuapp.com/"}
            repo={"https://github.com/CRNaro/group-project-02"}
          />
        </Grid>
        <Grid item className="project-container">
          <CustomCard
            color="#00d1b2"
            title={"StorySeeker"}
            subtitle={"HTML, CSS, JavaScript, Bulma, OpenLibrary API, TMDB API"}
            image={storyseeker}
            deploy={
              "https://hwoolford.github.io/storyseeker-for-biblio-cinephiles-v2/"
            }
            repo={
              "https://github.com/hwoolford/storyseeker-for-biblio-cinephiles-v2"
            }
          />
        </Grid>
        <Grid item className="project-container">
          <CustomCard
            color="#0d6efd"
            title={"Weather Dashboard"}
            subtitle={
              "HTML, CSS, Bootstrap, JavaScript, JQuery, OpenWeather API"
            }
            image={weatherdashboard}
            deploy={"https://hwoolford.github.io/weather-dashboard/"}
            repo={"https://github.com/hwoolford/weather-dashboard"}
          />
        </Grid>
        <Grid item className="project-container">
          <CustomCard
            color="#06aed5"
            title={"Workday Scheduler"}
            subtitle={"HTML, CSS, JavaScript, JQuery, Day.js"}
            image={workdayscheduler}
            deploy={"https://hwoolford.github.io/work-day-scheduler/"}
            repo={"https://github.com/hwoolford/work-day-scheduler"}
          />
        </Grid>
        <Grid item className="project-container">
          <CustomCard
            color="#351c75"
            title={"Coding Quiz"}
            subtitle={"HTML, CSS, JavaScript"}
            image={codingquiz}
            deploy={
              "https://hwoolford.github.io/multiple-choice-js-coding-quiz/"
            }
            repo={"https://github.com/hwoolford/multiple-choice-js-coding-quiz"}
          />
        </Grid>
      </Grid>
    </div>
  );
}

CustomCard.propTypes = {
  color: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string.isRequired,
  deploy: PropTypes.string.isRequired,
  repo: PropTypes.string.isRequired,
};
