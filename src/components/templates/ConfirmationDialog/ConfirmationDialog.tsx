import { Dialog, DialogTitle, DialogContent, DialogActions, useTheme, useMediaQuery } from "@mui/material";
import * as React from "react";

export interface IConfirmationDialogProps {
    title: string;
    message: string | React.ReactNode;
    actions?: React.ReactNode;
    isOpen: boolean;
    onClose: () => void;
}

const ConfirmationDialog: React.FC<IConfirmationDialogProps> = ({
    title,
    message,
    actions,
    isOpen,
    onClose,
}) => {

    const theme = useTheme();
    const onMobile = useMediaQuery(theme.breakpoints.down('sm'))

    let actionsSx = {}
    if (onMobile) {
        actionsSx = {
            flexDirection: 'column',
            gap: "8px",
            alignItems: "stretch",
        }
    }

    const Actions = actions ? <DialogActions disableSpacing={onMobile} sx={actionsSx}>{actions}</DialogActions> : <></>;

    return (
        <Dialog
            open={isOpen}
            onClose={onClose}
            aria-labelledby="alert-dialog-title"
            aria-describedby="alert-dialog-description"
        >
            <DialogTitle id="alert-dialog-title">{title}</DialogTitle>
            <DialogContent>
                {message}
            </DialogContent>
            {Actions}
        </Dialog>
    );
};

export default ConfirmationDialog;