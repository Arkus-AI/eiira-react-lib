import React from 'react';
import { Menu, MenuItem, Button, Typography, TypographyVariant } from '@mui/material';
import Icon from '../Icon/Icon';

interface TextTypeSelectorOption {
    value: string;
    label: string;
    typographyVariant: TypographyVariant;
}

export interface EditorTextTypeSelectorProps {
    options: Array<TextTypeSelectorOption>;
    selectedValue: string;
    onChange: (value: string) => void;
    disabled?: boolean;
}

export const EditorCarretDownIcon = () => {
    return <Icon iconType='caret-down' style={{
        height: "12px",
        width: "12px",
    }} />
};


const EditorTextTypeSelector = ({ options, selectedValue, onChange, disabled }: EditorTextTypeSelectorProps) => {
    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event: any) => {
        setAnchorEl(event.currentTarget);
    };
    const handleMenuItemClick = (value: string) => {
        onChange(value)
        onClose();
    };
    const onClose = () => {
        setAnchorEl(null);
    };
    const buttonLabel = options.find(option => option.value === selectedValue)?.label;
    return (<>
        <Button
            id="text-type-selector-button"
            aria-controls={open ? 'text-type-selector-menu' : undefined}
            aria-haspopup="true"
            aria-expanded={open ? 'true' : undefined}
            onClick={handleClick}
            disabled={disabled}
            endIcon={<EditorCarretDownIcon />}
            variant="text"
            sx={{
                padding: "4px 8px",
                lineHeight: "20px",
                whiteSpace: "nowrap",
                ".MuiButton-endIcon > .MuiSvgIcon-root": {
                    margin: "6px",
                    marginLeft: "4px",
                    marginRight: "8px",
                }
            }}
        > {buttonLabel}
        </Button>
        <Menu
            id="text-type-selector-menu"
            anchorEl={anchorEl}
            open={open}
            onClose={onClose}
            MenuListProps={{
                'aria-labelledby': 'text-type-selector-button',
            }}
        >
            {options.map((option) => (
                <MenuItem key={option.value}
                    onClick={() => handleMenuItemClick(option.value)}
                    selected={option.value === selectedValue}
                >
                    <Typography variant={option.typographyVariant}>{option.label}</Typography>
                </MenuItem>
            ))}
        </Menu>
    </>);
}

export default EditorTextTypeSelector;