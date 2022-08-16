import React from "react";
import { Container, Grid, Typography } from "@mui/material";
import { useTheme } from '@mui/material';


export default function Landing() {
  const theme = useTheme()
  return (
    <Container disableGutters="true" maxWidth="xl" sx={{height: "100%", backgroundColor: "primary.dark"}}>
      <Grid container justifyContent="center" alignContent={'center'} height='100%'>
        <Typography variant="h3" textAlign="center">Welcome to <span class="headline-emphasized">KeatDev</span></Typography>
        <Typography variant="h3" textAlign="center">I'm <span class="headline-emphasized">Drew Keat</span></Typography>
      </Grid>
    </Container>
  );
}
