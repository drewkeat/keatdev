import React from "react";
import {dividerClasses, Grid} from '@mui/material'

import {Header} from "./Components"

function App() {
  return (
    <Grid container>
      This is the App route
      <Header />
      <main>Main content</main>
      <footer>Copyright info</footer>
    </Grid>
  );
}

export default App