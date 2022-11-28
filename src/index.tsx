import AboutMemberForm from "./components/templates/AboutMemberForm";
import { IAboutMemberFormProps } from "./components/templates/AboutMemberForm/AboutMemberForm";

import { lightTheme } from "./themes/light.theme";
import { CssBaseline, ThemeProvider } from "@mui/material";
import React from "react";

export const ThemedAboutMemberForm = (props: IAboutMemberFormProps) => {
    return (
        <ThemeProvider theme={lightTheme}>
            <CssBaseline />
            <AboutMemberForm {...props} />
        </ThemeProvider>
    )
}
