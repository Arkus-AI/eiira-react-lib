import * as React from 'react';
import { styled } from '@mui/material/styles';
import Tooltip, { TooltipProps, tooltipClasses } from '@mui/material/Tooltip';
import Icon from "../Icon";
import { IconButton, Typography } from '@mui/material';
import ClickAwayListener from '@mui/base/ClickAwayListener';


const BootstrapTooltip = styled(({ className, ...props }: TooltipProps) => (
    <Tooltip {...props} arrow classes={{ popper: className }} />
))(({ theme }) => ({
    [`& .${tooltipClasses.arrow}`]: {
        color: theme.palette.info.main,
    },
    [`& .${tooltipClasses.tooltip}`]: {
        backgroundColor: theme.palette.info.main,
        color: theme.palette.text.primary,
        padding: "12px 16px",
    },
    ".MuiTooltip-tooltip.MuiTooltip-touch": {
        "&.MuiTooltip-tooltipPlacementBottom": {
            marginTop: "12px",
        },
        "&.MuiTooltip-tooltipPlacementTop": {
            marginBottom: "12px",
        },
        "&.MuiTooltip-tooltipPlacementLeft": {
            marginRight: "12px",
        },
        "&.MuiTooltip-tooltipPlacementRight": {
            marginLeft: "12px",
        },
    }
}));

export interface IconWithTooltipProps {
    /**
     * Tooltip type to display
     */
    tooltipType?: "help";
    /**
     * Tooltip text
     */
    tooltipText: string;
    /**
     * Placement of the tooltip
     */
    placement?: "top" | "right" | "bottom" | "left";
}

export default function IconWithTooltip({ tooltipType = "help", tooltipText, placement = "bottom" }: IconWithTooltipProps) {
    const [open, setOpen] = React.useState(false);
    const handleTooltipClose = () => {
        setOpen(false);
    };
    const handleTooltipOpen = () => {
        setOpen(true);
    };
    return (
        <ClickAwayListener onClickAway={handleTooltipClose}>
            <div>
                <BootstrapTooltip
                    open={open}
                    title={<Typography variant='body2'>{tooltipText}</Typography>}
                    placement={placement}
                    arrow
                    disableFocusListener
                    disableHoverListener
                    disableTouchListener
                >
                    <IconButton sx={{ padding: 0 }} color="primary" onClick={handleTooltipOpen}>
                        <Icon iconType={tooltipType} color="inherit" sx={{ "&:hover": { color: "hover.main" } }} />
                    </IconButton>
                </BootstrapTooltip>
            </div>
        </ClickAwayListener>
    )
}
