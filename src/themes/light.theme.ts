import { createTheme, PaletteOptions } from "@mui/material";
import MuiCssBaseline from "./cssBaseline";

declare module '@mui/material/styles' {
  interface PaletteColorOptions {
    light?: string;
    main: string;
    dark?: string;
    field?: string;
    contrastText?: string;
  }

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


const palette: PaletteOptions = {
  mode: "light",
  primary: {
    main: "#0070F7",
    contrastText: "#fff",
  },
  secondary: {
    main: "#F9EEE5",
  },
  info: {
    main: "#EBF1FB"
  },
  error: {
    main: "#CA2B2B",
    light: "#FFEBEE"
  },
  text: {
    primary: "#233750",
    secondary: "rgba(35, 55, 73, 0.7)",
  },
  hover: {
    main: "#0046C3",
    light: "#EBF1FB",
  },
  neutral: {
    main: "#F9EEE5", // This is some random color
    field: "rgba(35, 55, 73, 0.55)"
  },
}

export const lightTheme = createTheme({
  palette,
  typography: {
    fontFamily: "Manrope",
  },
  components: {
    MuiCssBaseline,
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: "revert",
          padding: "8px 24px",
          fontSize: "16px",
          lineHeight: "24px"
        },
        outlinedPrimary: {
          borderColor: palette.primary?.main,
        }
      },
    },
    MuiButtonBase: {
      styleOverrides: {
        root: {
          "&:hover": {
            backgroundColor: "#EBF1FB"
          }
        }
      }
    },
    MuiInputLabel: {
      styleOverrides: {
        root: {
          lineHeight: "24px",
          color: palette.text?.primary
        }
      }
    },
    MuiFormLabel: {
      styleOverrides: {
        root: {
          lineHeight: "24px",
          color: palette.text?.primary
        }
      }
    },
    MuiInputBase: {
      styleOverrides: {
        input: {
          "::placeholder": {
            color: palette.text?.secondary,
          },
          '& .MuiOutlinedInput-root': {
            '& fieldset': {
              borderColor: palette.neutral?.field,
            },
            '&:hover fieldset': {
              borderColor: palette.primary?.main,
              borderWidth: "1px",
            },
            '&.Mui-focused fieldset': {
              borderColor: palette.primary?.main,
              borderWidth: "2px",
            },
          },
        }
      }
    },
    MuiFormHelperText: {
      styleOverrides: {
        root: {
          fontSize: "12px",
          lineHeight: "16px",
        }
      }
    },
    MuiAutocomplete: {
      styleOverrides: {
        root: {
          marginTop: "4px"
        },
        tag: {
          ".MuiChip-deleteIcon": {
            color: palette.primary?.main
          }
        },
        popper: {
          ">div": {
            // borderWidth: "1px",
            // borderStyle: "solid",
            // borderColor: palette.primary?.main,
            boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)",
            borderRadius: "4px",
          },
          "&[data-popper-placement*='bottom'] > div": {
            transform: "translateY(4px)",
          },
          "&[data-popper-placement*='top'] > div": {
            transform: "translateY(-4px)",
          },
        },
        inputRoot: {
          paddingTop: 0, paddingBottom: 0, paddingLeft: 0,
          ".MuiAutocomplete-input": {
            padding: "9px 9px 9px 9px",
          }
        },
        listbox: {
          ".MuiAutocomplete-option[aria-selected='true'].Mui-focused": {
            backgroundColor: palette.hover?.main,
            color: palette.hover?.contrastText,
          },
          ".MuiAutocomplete-option[aria-selected='true']": {
            backgroundColor: palette.primary?.main,
            color: palette.primary?.contrastText,
          },
          ".MuiAutocomplete-option.Mui-focused": {
            backgroundColor: palette.hover?.light,
            color: palette.hover?.contrastText,
          }
        }
      }
    },
  }
});
