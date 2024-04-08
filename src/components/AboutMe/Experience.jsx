import Timeline from "@mui/lab/Timeline";
import TimelineItem from "@mui/lab/TimelineItem";
import TimelineSeparator from "@mui/lab/TimelineSeparator";
import TimelineConnector from "@mui/lab/TimelineConnector";
import TimelineContent from "@mui/lab/TimelineContent";
import TimelineDot from "@mui/lab/TimelineDot";
import TimelineOppositeContent from "@mui/lab/TimelineOppositeContent";
import { Typography, createTheme, ThemeProvider, Grid } from "@mui/material/";

const theme = createTheme({
    palette: {
      primary: {
        main: '#219ebc',
      },
      secondary: {
        main: '#ef0d8d',
      },
    },
  });

export default function Experience() {
  return (
    <>
    <h1 className="about-section-title">Experience</h1>
    <Grid container justifyContent="center" alignItems="center">
    <Grid item xs={12} md={12}>
    <ThemeProvider theme={theme}>
      <Timeline position="alternate">
        <TimelineItem>
          <TimelineOppositeContent>
            <Typography
              className="experience-date"
              variant="h1"
              fontSize="1.25rem"
              >
              2020 – 2023
            </Typography>
          </TimelineOppositeContent>
          <TimelineSeparator>
            <TimelineDot color="secondary"/>
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent>
            <Typography
              className="experience-title"
              variant="h1"
              fontSize="1.5rem"
              fontWeight="bold"
              >
              Professional Development Facilitator
            </Typography>
            <Typography
              className="experience-location"
              variant="h2"
              fontStyle="italic"
            >
              Spring ISD | Houston, TX
            </Typography>
            <Typography
              className="experience-details"
              variant="h3"
              fontSize="1rem"
            >
              Designed and provided professional learning experiences for
              district staff. Developed summer conferences for new and returning
              teachers and administrators. <br /> <br />
            </Typography>
          </TimelineContent>
        </TimelineItem>
        <TimelineItem>
          <TimelineOppositeContent>
          <Typography
              className="experience-date"
              variant="h1"
              fontSize="1.25rem"
            >
              2016 – 2020 <br /> <br />
            </Typography>
          </TimelineOppositeContent>
          <TimelineSeparator>
            <TimelineDot color="primary" />
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent>
          <Typography
              className="experience-title"
              variant="h1"
              fontSize="1.5rem"
              fontWeight="bold"
            >
              Elementary Math Coach
            </Typography>
            <Typography
              className="experience-location"
              variant="h2"
              fontStyle="italic"
            >
              Spring ISD | Houston, TX
            </Typography>
            <Typography
              className="experience-details"
              variant="h3"
              fontSize="1rem"
            >
              Provided coaching and support for math teachers. Served on the
              administration team and helped support teachers and students.
              <br /> <br />
            </Typography>
           
          </TimelineContent>
        </TimelineItem>
        <TimelineItem>
          <TimelineOppositeContent>
            <Typography
              className="experience-date"
              variant="h1"
              fontSize="1.25rem"
            >
              2002 – 2016
            </Typography>
          </TimelineOppositeContent>
          <TimelineSeparator>
            <TimelineDot color="secondary" />
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent>
            <Typography
              className="experience-title"
              variant="h1"
              fontSize="1.5rem"
              fontWeight="bold"
            >
              Elementary Teacher
            </Typography>
            <Typography
              className="experience-location"
              variant="h2"
              fontStyle="italic"
            >
              Spring ISD | Houston, TX
            </Typography>
            <Typography
              className="experience-details"
              variant="h3"
              fontSize="1rem"
            >
              Expertly designed and delivered engaging instruction and
              professional development to diverse audiences. Named 2005-2006
              District Elementary Teacher of the Year.
            </Typography>
          </TimelineContent>
        </TimelineItem>
      </Timeline>
      </ThemeProvider>
      </Grid>
      </Grid>
    </>
  );
}
