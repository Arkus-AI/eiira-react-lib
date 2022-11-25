import AboutMemberForm from "./components/organisms/AboutMemberForm";
import { IAboutMemberFormProps } from "./components/organisms/AboutMemberForm/AboutMemberForm";

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
