import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircleInfo, faTriangleExclamation, faMale, faFemale, faTrashCan } from '@fortawesome/free-solid-svg-icons'
import { SvgIcon, SvgIconProps } from "@mui/material";

export interface IconProps extends SvgIconProps {
    /**
     * Icon to display
     */
    iconType: "help" | "exclamation-triangle" | "male" | "female" | "waste-basket";
    /**
     * Color of icon
     */
    color?: "primary" | "secondary" | "error" | "inherit";
}

export const ICONS = {
    "help": faCircleInfo,
    "exclamation-triangle": faTriangleExclamation,
    "male": faMale,
    "female": faFemale,
    "waste-basket": faTrashCan
}

export default function Icon({ iconType, color, ...props }: IconProps) {
    return (
        <SvgIcon color={color} {...props}>
            <FontAwesomeIcon icon={ICONS[iconType]} />
        </SvgIcon>
    )
}