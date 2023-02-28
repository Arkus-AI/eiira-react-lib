import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
    faCircleInfo, faTriangleExclamation, faMale, faFemale,
    faTrashCan, faCaretDown, faXmark, faCircleXmark, faUsers,
    faPlus, faSave, faBold, faItalic, faAlignLeft, faAlignCenter,
    faAlignRight, faListOl, faListUl, faIndent, faOutdent, faLink,
    faImage, faCode, faTable, faChartSimple, faUndoAlt, faRedoAlt,
    faFileExport, faDna, faCube
} from '@fortawesome/free-solid-svg-icons'
import { SvgIcon, SvgIconProps } from "@mui/material";

export interface IconProps extends SvgIconProps {
    /**
     * Icon to display
     */
    iconType: "help" | "exclamation-triangle" | "male" | "female" | "waste-basket" |
    "caret-down" | "xmark" | "circle-xmark" | "users" | "plus" | "save" | "bold" |
    "italic" | "align-left" | "align-center" | "align-right" | "list-ol" | "list-ul" |
    "indent" | "outdent" | "link" | "image" | "code" | "table" | "chart-simple" | "undo-alt" |
    "redo-alt" | "file-export" | "dna" | "cube";
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
    "waste-basket": faTrashCan,
    "caret-down": faCaretDown,
    "xmark": faXmark,
    "circle-xmark": faCircleXmark,
    "users": faUsers,
    "plus": faPlus,
    "save": faSave,
    "bold": faBold,
    "italic": faItalic,
    "align-left": faAlignLeft,
    "align-center": faAlignCenter,
    "align-right": faAlignRight,
    "list-ol": faListOl,
    "list-ul": faListUl,
    "indent": faIndent,
    "outdent": faOutdent,
    "link": faLink,
    "image": faImage,
    "code": faCode,
    "table": faTable,
    "chart-simple": faChartSimple,
    "undo-alt": faUndoAlt,
    "redo-alt": faRedoAlt,
    "file-export": faFileExport,
    "dna": faDna,
    "cube": faCube
}

export default function Icon({ iconType, color, ...props }: IconProps) {
    return (
        <SvgIcon color={color} {...props}>
            <FontAwesomeIcon icon={ICONS[iconType]} />
        </SvgIcon>
    )
}