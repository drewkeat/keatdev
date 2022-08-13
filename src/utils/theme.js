import {createTheme, responsiveFontSizes} from "@mui/material"

let theme=createTheme({
  palette: {
    type: 'light',
    primary: {
      main: '#3f91bd',
    },
    secondary: {
      main: '#bd3f91',
    },
    background: {
      default: '#eeeeee',
      paper: '#fcf3ed',
    },
    error: {
      main: '#f32c1e',
    },
  },
//   typography: {
//     fontFamily: 'Lato',
//   },
})
theme = responsiveFontSizes(theme);

export default theme