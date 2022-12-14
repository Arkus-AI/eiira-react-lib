import * as React from 'react';
import {
    CardContent, CardHeader, Card,
    CardActions, Popper, PopperProps,
} from '@mui/material';
import { Box } from '@mui/system';
import { useTheme } from "@mui/material/styles";

export interface IOnboardingCardProps extends PopperProps {
    title: string;
    stepIndicator: string;
    message: React.ReactNode;
    actions: React.ReactNode;
}

interface IArrowProps {
    setRef: (node: HTMLElement | null) => void;
}

const ARROW_OFFSET = 8;

const Arrow = ({ setRef }: IArrowProps) => {
    const theme = useTheme()
    const setRefCB = React.useCallback((node: HTMLElement | null) => {
        setRef(node);
    }, [setRef])

    const beforaAndArrowSx = {
        position: "absolute",
        borderLeft: `${ARROW_OFFSET}px solid transparent`,
        borderRight: `${ARROW_OFFSET}px solid transparent`,
        borderBottom: `${ARROW_OFFSET}px solid ${theme.palette.secondary.main}`,
        background: "inherit",
    }


    return <Box ref={setRefCB} id="arrow"
        sx={{
            ...beforaAndArrowSx,
            visibility: "hidden",

            "::before": {
                ...beforaAndArrowSx,
                visibility: 'visible',
                content: `''`,
            }
        }} />
}


const offsetFn = ({ popper, reference, placement }: any): [number, number] => {
    let skidOffset = 0;
    if (placement === "right-start" || placement === "left-start") {
        if (reference.height > 48) {
            skidOffset = reference.height / 2 - 24;
        }
    }
    return [skidOffset, ARROW_OFFSET];
}

export default function OnboardingCard({ title, stepIndicator, message, actions, ...popperProps }: IOnboardingCardProps) {
    const [arrowRef, setArrowRef] = React.useState<HTMLElement | null>(null);
    const theme = useTheme();

    const { sx, ...rest } = popperProps;

    return (
        <Popper {...rest}
            sx={{
                ...sx,
                "&[data-popper-placement^='top'] > #arrow": {
                    bottom: `-${ARROW_OFFSET}px`,
                    "::before": { transform: "rotate(180deg)" }
                },
                "&[data-popper-placement^='bottom'] > #arrow": { top: `-${ARROW_OFFSET}px` },
                "&[data-popper-placement^='left'] > #arrow": {
                    right: `-${ARROW_OFFSET / 2}px`,
                    "::before": { transform: "rotate(90deg)" }
                },
                "&[data-popper-placement^='right'] > #arrow": {
                    left: `-${ARROW_OFFSET * 2.5}px`,
                    "::before": { transform: "rotate(-90deg)" }
                }
            }}
            modifiers={
                [
                    { name: 'offset', options: { offset: offsetFn, }, },
                    { name: 'arrow', enabled: true, options: { element: arrowRef, }, },
                    {
                        name: 'flip', options: {
                            fallbackPlacements: ["bottom", "left", "right", "top"],
                        }
                    }
                ]} >
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
            <Arrow setRef={setArrowRef} />
        </Popper >
    )
}


