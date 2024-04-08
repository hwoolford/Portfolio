import { Grid } from "@mui/material/";

export default function Education() {
  return (
    <>
      <h1 className="about-section-title">Education</h1>
      <Grid container spacing={1} justifyContent="center" color="white" paddingBottom="0.5rem" borderBottom="2px solid #ef0d8d">
        <Grid
          item
          xs={12}
          md={5}
          container
          justifyContent="start"
          alignItems="start"
          fontFamily="Quicksand"
          fontWeight="bold"
          fontSize="1.25rem"        >
          Full Stack Web Development Certificate
        </Grid>
        <Grid
          item
          xs={12}
          md={5}
          container
          justifyContent="start"
          alignItems="start"
          fontFamily="Quicksand"
          fontSize="1.25rem"  
        >
          University of New Hampshire, Portsmouth, NH
        </Grid>
        <Grid
          item
          xs={12}
          md={2}
          container
          justifyContent="start"
          alignItems="start"
          fontFamily="Quicksand"
          fontSize="1.25rem"  
        >
          March 2024
        </Grid>
      </Grid>
      <Grid container spacing={1} justifyContent="center" color="white" paddingBottom="0.5rem" paddingTop="0.5rem" borderBottom="2px solid #ef0d8d">
        <Grid
          item
          xs={12}
          md={5}
          container
          justifyContent="start"
          alignItems="start"
          fontFamily="Quicksand"
          fontWeight="bold"
          fontSize="1.25rem"  
        >
          M. Ed. Teacher Leadership
        </Grid>
        <Grid
          item
          xs={12}
          md={5}
          container
          justifyContent="start"
          alignItems="start"
          fontFamily="Quicksand"
          fontSize="1.25rem"  
        >
          Lamar University, Beaumont, TX
        </Grid>
        <Grid
          item
          xs={12}
          md={2}
          container
          justifyContent="start"
          alignItems="start"
          fontFamily="Quicksand"
          fontSize="1.25rem"  
        >
          2007 – 2009
        </Grid>
      </Grid>
      <Grid container spacing={1} justifyContent="center" color="white" paddingTop="0.5rem">
        <Grid
          item
          xs={12}
          md={5}
          container
          justifyContent="start"
          alignItems="start"
          fontFamily="Quicksand"
          fontWeight="bold"
          fontSize="1.25rem"  
        >
          B.S. Interdisciplinary Studies
        </Grid>
        <Grid
          item
          xs={12}
          md={5}
          container
          justifyContent="start"
          alignItems="start"
          fontFamily="Quicksand"
          fontSize="1.25rem"  
        >
          Lamar University, Beaumont, TX
        </Grid>
        <Grid
          item
          xs={12}
          md={2}
          container
          justifyContent="start"
          alignItems="start"
          fontFamily="Quicksand"
          fontSize="1.25rem"  
        >
          1992 – 1996
        </Grid>
      </Grid>
    </>
  );
}
