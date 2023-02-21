import React from "react";
import { IconButton, IconButtonProps } from '@mui/material';
import { IconProps } from '../Icon/Icon';
import Icon from '../Icon/Icon';

export interface EditorMenuButtonProps extends IconButtonProps {
    /**
     * The icon to display
     */
    icon: IconProps["iconType"];
}

const EditorMenuButton = (props: EditorMenuButtonProps) => {
    const { icon, ...buttonProps } = props;
    return (
        <IconButton {...buttonProps} >
            <Icon iconType={icon} />
        </IconButton>
    );
}

export default EditorMenuButton;