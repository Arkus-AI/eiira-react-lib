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

const ARROW_OFFSET = 5;

const Arrow = ({ setRef }: IArrowProps) => {
    const theme = useTheme()
    const setRefCB = React.useCallback((node: HTMLElement | null) => {
        setRef(node);
    }, [setRef])

    const beforaAndArrowSx = {
        position: "absolute",
        width: `${ARROW_OFFSET * 2}px`,
        height: `${ARROW_OFFSET * 2}px`,
        background: "inherit",
    }

    return <Box ref={setRefCB} id="arrow"
        sx={{
            ...beforaAndArrowSx,
            background: theme.palette.secondary.main,
            visibility: "hidden",
            "::before": {
                ...beforaAndArrowSx,
                visibility: 'visible',
                content: `''`,
                transform: "rotate(45deg)"
            }
        }} />
}


const offsetFn = ({ popper, reference, placement }: any): [number, number] => {
    console.log({ popper, reference, placement })
    // if(reference.height > )
    let skidOffset = 0;
    if (placement === "right-start" || placement === "left-start") {
        if (reference.height > 48) {
            skidOffset = reference.height / 2 - 24;
        }
    }
    return [skidOffset, ARROW_OFFSET * 2];
}

export default function OnboardingCard({ title, stepIndicator, message, actions, ...popperProps }: IOnboardingCardProps) {
    const [arrowRef, setArrowRef] = React.useState<HTMLElement | null>(null);

    // const arrowRef = React.useRef<HTMLDivElement>(null);
    return (
        <Popper {...popperProps}
            sx={{
                "&[data-popper-placement^='top'] > #arrow": { bottom: `-${ARROW_OFFSET}px` },
                "&[data-popper-placement^='bottom'] > #arrow": { top: `-${ARROW_OFFSET}px` },
                "&[data-popper-placement^='left'] > #arrow": { right: `-${ARROW_OFFSET}px` },
                "&[data-popper-placement^='right'] > #arrow": { left: `-${ARROW_OFFSET}px` }
            }}
            modifiers={[
                { name: 'offset', options: { offset: offsetFn, }, },
                { name: 'arrow', enabled: true, options: { element: arrowRef, }, },
                { name: 'preventOverflow', enabled: false, },
                { name: 'flip', enabled: true, options: { flipVariations: false } }
            ]}>
            <Card sx={{ maxWidth: "327px" }}>
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


