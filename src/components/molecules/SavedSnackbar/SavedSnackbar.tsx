import * as React from "react";
import { useTheme, Snackbar, Stack, Typography } from "@mui/material";
import { useTranslation } from "react-i18next";

import Icon from "../../atoms/Icon/Icon";

export interface ISavedSnackbarProps {
    /**
     * Whether the snackbar is open or not
     */
    open: boolean;
    /**
     * Duration in milliseconds
     */
    duration: number;
    /**
     * Set open to open snackbar
     */
    setOpen: (open: boolean) => void;
}

const SavedSnackbar = ({ open, duration, setOpen }: ISavedSnackbarProps) => {
    const { t } = useTranslation();
    const theme = useTheme();
    return (
        <Snackbar
            open={open}
            autoHideDuration={duration}
            message={<Stack direction="row" gap={1.5} alignItems="center">
                <Icon iconType="save" /><Typography variant="body2">{t('general.saveSnackbar.message')}</Typography>
            </Stack>}
            onClose={() => setOpen(false)}
            anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
            sx={{
                ".MuiPaper-root": {
                    backgroundColor: theme.palette?.text.secondary,
                    padding: "8px 12px",
                    minWidth: "auto",
                    borderRadius: "100px"
                },
                ".MuiSnackbarContent-message": {
                    padding: 0,
                }
            }}
        />
    )
}

export default SavedSnackbar;