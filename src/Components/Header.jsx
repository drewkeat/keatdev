import React from "react";
import { Box, Button, Typography } from "@mui/material";

const Header = (props) => {
  return (
    <Box textAlign="center">
      <Typography variant="h3">This is the header component</Typography>
      <Button variant="contained" primary>
        Click Me
      </Button>
    </Box>
  );
};

export default Header;
