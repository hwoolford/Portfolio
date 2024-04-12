import { Grid } from "@mui/material/";
import AboutSummary from "../../components/AboutMe/AboutSummary";
import Technologies from "../../components/AboutMe/Technologies";
import Experience from "../../components/AboutMe/Experience";
import Education from "../../components/AboutMe/Education";

export default function About() {
  return (
    <>
      <Grid container spacing={4} justifyContent="space-between" sx={{ padding: '3rem 4rem'}}>
        <Grid
          item
          xs={12}
          md={8}
          sx={{ paddingBottom: '3rem' }}
        >
          <AboutSummary style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}/>
        </Grid>
        <Grid
          item
          xs={12}
          md={3}
          sx={{ paddingBottom: '3rem' }}
        >
          <Technologies style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }} />
        </Grid>
        <Grid
          item
          xs={12}
          md={6}
          sx={{ paddingBottom: '3rem' }}
        >
           <Education style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}/>
          
        </Grid>
        <Grid
          item
          xs={12}
          md={6}
        >
         <Experience style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }} />
        </Grid>
      </Grid>
    </>
  );
}
