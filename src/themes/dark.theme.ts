import { createTheme } from "@mui/material";
import { blueGrey, cyan, pink } from "@mui/material/colors";
import MuiCssBaseline from "./cssBaseline";

declare module '@mui/material/styles' {
  interface Palette {
    hover: Palette['primary'];
    neutral: Palette['primary'];
  }
  interface PaletteOptions {
    hover: PaletteOptions['primary'];
    neutral: PaletteOptions['primary'];
  }
  interface PaletteColor {
    field?: string;
  }
  interface SimplePaletteColorOptions {
    field?: string;
  }
}

export const darkTheme = createTheme({
  palette: {
    mode: "dark",
    primary: {
      main: pink["A400"],
    },
    secondary: {
      main: cyan["A400"],
    },
    info: {
      main: "#EBF1FB"
    },
    error: {
      main: "#CA2B2B"
    },
    text: {
      primary: "#233750"
    },
    hover: {
      main: "#0046C3"
    },
    neutral: {
      main: "#F9EEE5", // This is some random color
      field: "rgba(35, 55, 73, 0.55)"
    },
    background: {
      default: blueGrey["800"],
      paper: blueGrey["700"],
    },
  },
  typography: {
    fontFamily: "Manrope",
  },
  components: {
    MuiCssBaseline,
  }
});