import { createTheme } from "@mui/material";

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

export const lightTheme = createTheme({
  palette: {
    mode: "light",
    primary: {
      main: "#0070F7",
    },
    secondary: {
      main: "#F9EEE5",
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
    }

  },
  components: {
    MuiButtonBase: {
      styleOverrides: {
        root: {
          "&:hover": {
            backgroundColor: "#EBF1FB"
          }
        }
      }
    }
  }
});
