import { createTheme, PaletteOptions } from "@mui/material";

declare module '@mui/material/styles' {
  interface PaletteColorOptions {
    light?: string;
    main: string;
    dark?: string;
    field?: string;
    containers?: string
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
    containers?: string
  }
  interface SimplePaletteColorOptions {
    field?: string;
    containers?: string
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
    dark: "#FAE2CF"
  },
  info: {
    main: "#EBF1FB"
  },
  error: {
    main: "#CA2B2B",
    light: "#FFEBEE",
    dark: "#910002"
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
    field: "rgba(35, 55, 73, 0.55)",
    containers: "rgba(35, 55, 73, 0.25)"
  },
}

export const lightTheme = createTheme({
  palette,
  typography: {
    fontFamily: "Manrope",
    h1: {
      fontSize: "36px",
      lineHeight: "40px",
      fontWeight: 200,
    },
    h2: {
      fontSize: "28px",
      lineHeight: "32px",
      fontWeight: 200,
    },
    h3: {
      fontSize: "24px",
      lineHeight: "28px",
      fontWeight: 200,
    },
    h4: {
      fontSize: "20px",
      lineHeight: "24px",
      fontWeight: 200,
    },
    h5: {
      fontSize: "16px",
      lineHeight: "24px",
      fontWeight: "bold",
    },
    h6: {
      fontSize: "14px",
      lineHeight: "20px",
      fontWeight: "bold",
    },
  },
  components: {
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
    MuiFormGroup: {
      styleOverrides: {
        row: {
          ".MuiFormControlLabel-root": {
            marginRight: "48px",
          }
        }
      }
    },
    MuiTextField: {
      styleOverrides: {
        root: {
          "::placeholder": {
            color: palette.text?.secondary,
          },
          '& .MuiOutlinedInput-root': {
            '& fieldset': {
              borderWidth: 0,
            },
            '&:hover fieldset': {
              borderWidth: 0,
            },
            '&.Mui-focused fieldset': {
              borderWidth: 0,
            },
          },
        }
      }
    },
    MuiInputBase: {
      styleOverrides: {
        root: {
          marginTop: "4px",
          border: `1px solid ${palette.neutral?.field}`,
          padding: "8px",
          borderRadius: "4px",
          boxSizing: "border-box",
          "&:hover": {
            borderColor: palette.primary?.main
          },
          "&.Mui-focused": {
            borderColor: palette.primary?.main,
            borderWidth: "2px",
            padding: "7px",
          },
          "&.Mui-error": {
            borderColor: palette.error?.main,
            "&:hover": {
              borderColor: palette.error?.dark
            },
            "&.Mui-focused": {
              borderColor: palette.error?.main,
            },
          }
        },
        input: {
          padding: 0
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
        popper: {
          ">div": {
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
          padding: "8px",
          ".MuiAutocomplete-input": {
            padding: "0px",
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
        },
        clearIndicator: {
          fontSize: "20px"
        }
      }
    },
    MuiAccordion: {
      styleOverrides: {
        root: {
          marginBottom: 8,
          '&:before': {
            display: 'none',
          },
        }
      }
    },
    MuiAccordionSummary: {
      styleOverrides: {
        root: {
          backgroundColor: palette.secondary?.main,
          boxSizing: "content-box",
          padding: "12px 24px",
          paddingRight: "12px",
          minHeight: "unset",
          ".MuiAccordionSummary-expandIconWrapper": {
            color: palette.text?.primary,
            fontSize: "20px",
          },
          ".MuiAccordionSummary-content": {
            margin: 0,
          },
          ":hover": {
            backgroundColor: palette.secondary?.dark,
          }
        }
      }
    },
    MuiAccordionDetails: {
      styleOverrides: {
        root: {
          padding: "24px",
        }
      }
    },
    MuiChip: {
      styleOverrides: {
        outlined: {
          borderColor: palette.neutral?.field,
        },
        deleteIcon: {
          color: palette.neutral?.field,
          fontSize: "20px",
          ":hover": {
            color: palette.primary?.main,
          }
        }
      }
    }
  }
});
