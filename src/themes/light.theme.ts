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
    dark: "rgba(35, 55, 73, 0.7)",
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
    caption: {
      lineHeight: "16px",
      color: palette.neutral?.dark
    }
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: "revert",
          padding: "8px 24px",
          fontSize: "16px",
          lineHeight: "24px",
          '@media (hover: hover)': {
            "&:hover": {
              backgroundColor: palette.hover?.main,
            }
          }
        },
        outlinedPrimary: {
          borderColor: palette.primary?.main,
          '@media (hover: hover)': {
            "&:hover": {
              backgroundColor: palette.hover?.light,
            }
          }
        }
      },
    },
    MuiInputLabel: {
      styleOverrides: {
        root: {
          lineHeight: "24px",
          color: palette.text?.primary,
          whiteSpace: "normal"
        }
      }
    },
    MuiFormLabel: {
      styleOverrides: {
        root: {
          lineHeight: "24px",
          color: palette.text?.primary
        },
        asterisk: {
          color: palette.error?.main
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
          '& .MuiOutlinedInput-root': {
            '& fieldset': {
              borderWidth: 0,
            },
            '@media (hover: hover)': {
              '&:hover fieldset': {
                borderWidth: 0,
              },
            },
            '&.Mui-focused fieldset': {
              borderWidth: 0,
            },
          },
        },
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
          '@media (hover: hover)': {
            "&:hover": {
              borderColor: palette.primary?.main
            }
          },
          "&.Mui-focused": {
            borderColor: palette.primary?.main,
            borderWidth: "2px",
            padding: "7px",
          },
          "&.Mui-error": {
            borderColor: palette.error?.main,
            '@media (hover: hover)': {
              "&:hover": {
                borderColor: palette.error?.dark
              }
            },
            "&.Mui-focused": {
              borderColor: palette.error?.main,
            },
          }
        },
        input: {
          padding: 0,
          "&::placeholder": {
            color: palette.text?.secondary,
            opacity: 1,
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
          '@media (hover: hover)': {
            ":hover": {
              backgroundColor: palette.secondary?.dark,
            }
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
          '@media (hover: hover)': {
            ":hover": {
              color: palette.primary?.main,
            }
          }
        }
      }
    },
    MuiDialog: {
      styleOverrides: {
        paper: {
          borderRadius: "8px",
          padding: "0px",
        },
        paperWidthSm: {
          maxWidth: "550px"
        }
      }
    },
    MuiDialogTitle: {
      styleOverrides: {
        root: {
          padding: "36px",
          paddingBottom: "24px",
          fontSize: "20px",
          lineHeight: "24px",
          fontWeight: 200
        }
      }
    },
    MuiDialogContent: {
      styleOverrides: {
        root: {
          padding: "36px",
          paddingTop: "0px",
          paddingBottom: "44px",
        }
      }
    },
    MuiDialogActions: {
      styleOverrides: {
        root: {
          padding: "36px",
          paddingTop: "0px"
        }
      }
    },
    MuiBackdrop: {
      styleOverrides: {
        root: {
          backgroundColor: palette.neutral?.dark,
        }
      }
    }
  }
});
