import React from "react";
import { IconButton, IconButtonProps } from '@mui/material';
import { IconProps } from '../Icon/Icon';
import Icon from '../Icon/Icon';

export interface EditorMenuButtonProps extends IconButtonProps {
    /**
     * The icon to display
     */
    icon: IconProps["iconType"];
    /**
     * Selected state
     */
    selected?: boolean;
}

const EditorMenuButton = (props: EditorMenuButtonProps) => {
    const { icon, selected, ...buttonProps } = props;
    return (
        <IconButton {...buttonProps}
            className={`editor-menu-button ${selected ? "selected" : ""}`}
            style={{
                padding: "4px",
                borderRadius: "4px",
                height: "32px",
            }}
        >
            <Icon iconType={icon} />
        </IconButton>
    );
}

export default EditorMenuButton;