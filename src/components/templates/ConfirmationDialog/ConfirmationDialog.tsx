import { Dialog, DialogTitle, DialogContent, DialogContentText, DialogActions } from "@mui/material";
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
    const Actions = actions ? <DialogActions>{actions}</DialogActions> : <></>;

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