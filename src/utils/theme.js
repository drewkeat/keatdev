import {createTheme, responsiveFontSizes} from "@mui/material"


let theme=createTheme({
  palette: {
    type: 'light',
    primary: {
      main: '#4f8b9b',
    },
    secondary: {
      main: '#5E6DAA',
    },
  },
  typography: {
    fontFamily: 'Raleway',
    h1: {
      fontFamily: 'Josefin Sans',
    },
    h2: {
      fontFamily: 'Josefin Sans',
    },
    h3: {
      fontFamily: 'Josefin Sans',
    },
    h4: {
      fontFamily: 'Josefin Sans',
    },
    h5: {
      fontFamily: 'Josefin Sans',
    },
    h6: {
      fontFamily: 'Josefin Sans',
    },
  }
})
theme = responsiveFontSizes(theme);

export default theme