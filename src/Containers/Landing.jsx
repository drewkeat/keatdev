import React from "react";
import { Container, Typography } from "@mui/material";
import { useTheme } from '@mui/material';


export default function Landing() {
  const theme = useTheme()
  return (
    <Container sx={{height: "100%", backgroundColor: "primary.main"}}>
      <Typography variant="h3" textAlign="center">Welcome to <span class="headline-emphasized" style={{color: theme.palette.secondary.light}}>KeatDev</span></Typography>
      <Typography variant="h4" textAlign="center">I'm Drew Keat</Typography>
    </Container>
  );
}
