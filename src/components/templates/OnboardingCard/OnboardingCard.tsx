import * as React from 'react';
import {
    CardContent, CardHeader, Card,
    CardActions, Dialog,
} from '@mui/material';
import { useTheme } from "@mui/material/styles";

export interface IOnboardingCardProps {
    title: string;
    stepIndicator: string;
    message: React.ReactNode;
    actions: React.ReactNode;
    open: boolean;
}

export default function OnboardingCard({ title, stepIndicator, message, actions, open }: IOnboardingCardProps) {
    const theme = useTheme();

    return (
        <Dialog open={open}>
            <Card sx={{ maxWidth: "327px", border: `1px solid ${theme.palette.secondary.main}`, boxShadow: "0px 1px 10px rgba(0, 0, 0, 0.1)" }}>
                <CardHeader title={title} subheader={stepIndicator}
                    titleTypographyProps={{ variant: "h5", color: "text.main" }}
                    subheaderTypographyProps={{ variant: "h5", color: "text.main" }}
                    sx={{
                        padding: "12px 24px",
                        backgroundColor: "secondary.main",
                        ".MuiCardHeader-content": {
                            display: "flex",
                            flexDirection: "row",
                            justifyContent: "space-between",
                        }
                    }}
                />
                <CardContent sx={{ padding: "24px" }}>
                    {message}
                </CardContent>
                <CardActions disableSpacing sx={{ padding: "24px", paddingTop: "0px", justifyContent: "flex-end", gap: "24px" }} >
                    {actions}
                </CardActions>
            </Card>
        </Dialog>
    )
}


