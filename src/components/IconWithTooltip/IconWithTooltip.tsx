import * as React from 'react';
import { styled } from '@mui/material/styles';
import Tooltip, { TooltipProps, tooltipClasses } from '@mui/material/Tooltip';
import Icon from "../Icon/Icon";
import { IconButton, Typography } from '@mui/material';

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
}

export default function IconWithTooltip({ tooltipType="help", tooltipText }: IconWithTooltipProps) {
    return (
        <BootstrapTooltip title={<Typography variant='body2'>{tooltipText}</Typography>} arrow>
            <IconButton sx={{ padding: 0 }} color="primary">
                <Icon iconType={tooltipType} color="inherit" sx={{ "&:hover": { color: "hover.main" } }} />
            </IconButton>
        </BootstrapTooltip>
    )
}
