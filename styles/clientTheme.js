import { createMuiTheme, responsiveFontSizes } from "@material-ui/core/styles";
import { red } from "@material-ui/core/colors";

// Create a theme instance.
let theme = createMuiTheme({
  palette: {
    primary: {
      main: "#ff5f5d",
      light: "#ff8882",
      dark: "#194350",
      contrastText: "#fff",
    },
    secondary: {
      main: "#93329e",
      text: "#93329e",
      light: "#b4aee8",
      dark: "#440a67",
      // contrastText: "#ffe3fe",
    },
    error: {
      main: red.A400,
    },
    background: {
      default: "#fff",
    },
    contrastThreshold: 3,
  },
});

theme = responsiveFontSizes(theme);

export default theme;
