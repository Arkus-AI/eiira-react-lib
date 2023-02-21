import React from 'react';
import { Menu, MenuItem, Button, Typography } from '@mui/material';
import Icon from '../Icon/Icon';

interface TextTypeSelectorOption {
    value: string;
    label: string;
    typographyVariant: string;
}

export interface EditorTextTypeSelectorProps {
    options: Array<TextTypeSelectorOption>;
    selectedValue: string;
    onChange: (value: string) => void;
}

const EditorTextTypeSelector = ({ options, selectedValue, onChange }: EditorTextTypeSelectorProps) => {
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
            endIcon={<Icon iconType='caret-down' />}
            variant="text"
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
                <MenuItem key={option.value} onClick={() => handleMenuItemClick(option.value)}>
                    <Typography variant={option.typographyVariant}>{option.label}</Typography>
                </MenuItem>
            ))}
        </Menu>
    </>);
}

export default EditorTextTypeSelector;