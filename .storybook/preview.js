import { CssBaseline, ThemeProvider } from "@mui/material";
import { useMemo } from "react";
import { darkTheme } from "../src/themes/dark.theme";
import { lightTheme } from "../src/themes/light.theme";
import MuiCssBaseline from "../src/themes/cssBaseline";
import { I18nextProvider } from "react-i18next";
import i18n from "eiira-i18next";

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
  layout: 'centered',
}

const THEMES = {
  light: lightTheme,
  dark: darkTheme,
};

export const withMuiThemeAndI18n = (Story, context) => {
  // The theme global we just declared
  const { theme: themeKey } = context.globals;

  // only recompute the theme if the themeKey changes
  const theme = useMemo(() => THEMES[themeKey] || THEMES["light"], [themeKey]);
  theme.components.MuiCssBaseline = MuiCssBaseline;

  return (
    <I18nextProvider i18n={i18n}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Story />
      </ThemeProvider>
    </I18nextProvider>
  );
};

export const decorators = [withMuiThemeAndI18n];

export const globalTypes = {
  theme: {
    name: "Theme",
    title: "Theme",
    description: "Theme for your components",
    defaultValue: "light",
    toolbar: {
      icon: "paintbrush",
      dynamicTitle: true,
      items: [
        { value: "light", left: "☀️", title: "Light mode" },
        { value: "dark", left: "🌙", title: "Dark mode" },
      ],
    },
  },
};