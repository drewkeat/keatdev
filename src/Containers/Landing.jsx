import React from "react";
import { Grid, Typography } from "@mui/material";

import { Header } from "../Components";

export default function Landing() {
  return (
    <Grid
      container
      justifyContent={"center"}
      justifyItems={"center"}
      id="main-wrapper"
    >
      <Grid container xs={12} justifyContent="center" alignContent="start">
        <Header />
      </Grid>
      <Grid item xs={8}>
        <Typography variant="h3">Main Content Area</Typography>
      </Grid>
      <Grid container xs={12} justifyContent="center" alignContent="end">
        <Typography variant="h6" textAlign="center">
          Copyright info
        </Typography>
      </Grid>
    </Grid>
  );
}
