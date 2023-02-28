import { Button, Typography } from "@mui/material"
import { LoadingButton } from "@mui/lab"
import { CssBaseline, ThemeProvider } from "@mui/material";

import Icon from "./components/atoms/Icon";

import AboutMemberForm from "./components/templates/AboutMemberForm";
import AddMemberMenu from "./components/templates/AddMemberMenu/AddMemberMenu";
import ConfirmationDialog from "./components/templates/ConfirmationDialog";
import FamilyMemberCard from "./components/templates/FamilyMemberCard/FamilyMemberCard";
import TargetInformationForm from "./components/templates/TargetInformationForm";
import PrePedigreeForm from "./components/templates/PrePedigreeForm/PrePedigreeForm";
import OnboardingCard from "./components/templates/OnboardingCard/OnboardingCard";
import SavedSnackbar from "./components/molecules/SavedSnackbar";
import useDebounce from "./components/hooks/useDebounce";
import EditorMenuButton from "./components/atoms/EditorMenuButton";
import EditorTextTypeSelector from "./components/atoms/EditorTextTypeSelector";
import EditorDropdownMenu from "./components/atoms/EditorDropdownMenu";
import TextInput from "./components/molecules/TextInput";

import { lightTheme } from "./themes/light.theme";

import React from "react";

export const EiiraThemeWrapper = ({ children }: { children: React.ReactNode }) => {
    return (
        <ThemeProvider theme={lightTheme}>
            <CssBaseline />
            {children}
        </ThemeProvider>
    );
};

export {
    Button, Typography, LoadingButton, Icon,
    AboutMemberForm, AddMemberMenu, ConfirmationDialog, FamilyMemberCard,
    TargetInformationForm, PrePedigreeForm, OnboardingCard,
    SavedSnackbar, useDebounce, EditorMenuButton, EditorTextTypeSelector,
    EditorDropdownMenu, TextInput
};

