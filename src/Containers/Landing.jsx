import React from "react";
import { Box, Grid, Typography } from "@mui/material";

import { Header } from "../Components";

export default function Landing() {
  return (
    <Grid
      container
      justifyItems={"center"}
      id="main-wrapper"
      columns={{ xs: 4, sm: 8, md: 12 }}
    >
      {/* Row 1 */}
      <Grid item component={Box} xs={2} backgroundColor={"secondary.light"} />
      <Grid item component={Box} xs={2} backgroundColor={"primary.dark"} />
      <Grid container xs={6} justifyContent="center" alignContent="start">
        <Header />
      </Grid>
      <Grid item component={Box} xs={2} backgroundColor={"secondary.main"} />
      {/* row 2 */}
      <Grid item component={Box} xs={2} backgroundColor={"primary.light"} />
      <Grid item xs={8}>
        <Typography variant="h3">Main Content Area</Typography>
      </Grid>
      <Grid item component={Box} xs={2} backgroundColor={"secondary.dark"} />
      {/* row 3 */}
      <Grid item component={Box} xs={2} backgroundColor={"secondary.main"} />
      <Grid container xs={6} justifyContent="center" alignContent="end">
        <Typography variant="h6" textAlign="center">
          Copyright info
        </Typography>
      </Grid>
      <Grid item component={Box} xs={4} backgroundColor={"success.light"} />
    </Grid>
  );
}
