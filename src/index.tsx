import AboutMemberForm from "./components/templates/AboutMemberForm";
import TargetInformationForm from "./components/templates/TargetInformationForm";
import ConfirmationDialog from "./components/templates/ConfirmationDialog";
import Icon from "./components/atoms/Icon";
import { IAboutMemberFormProps } from "./components/templates/AboutMemberForm/AboutMemberForm";
import { Button, Typography } from "@mui/material"
import { LoadingButton } from "@mui/lab"

import { lightTheme } from "./themes/light.theme";
import { CssBaseline, ThemeProvider } from "@mui/material";
import React from "react";

export const EiiraThemeWrapper = ({ children }: { children: React.ReactNode }) => {
    return (
        <ThemeProvider theme={lightTheme}>
            <CssBaseline />
            {children}
        </ThemeProvider>
    );
};

export { TargetInformationForm, Button, ConfirmationDialog, Icon, Typography, LoadingButton };

export const ThemedAboutMemberForm = (props: IAboutMemberFormProps) => {
    return (
        <ThemeProvider theme={lightTheme}>
            <CssBaseline />
            <AboutMemberForm {...props} />
        </ThemeProvider>
    )
}
