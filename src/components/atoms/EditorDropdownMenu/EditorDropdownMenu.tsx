import React from "react";
import { Button, Menu, MenuItem, ListItemIcon, ListItemText } from '@mui/material';
import Icon, { IconProps } from '../Icon/Icon';
import { EditorCarretDownIcon } from '../EditorTextTypeSelector/EditorTextTypeSelector';

interface EditorDropdownMenuOption {
    label: string;
    diasbled: boolean;
    value: string;
    iconType?: IconProps['iconType'];
    divider?: boolean;
}


export interface EditorDropdownMenuProps {
    iconType: IconProps['iconType'];
    options: Array<EditorDropdownMenuOption>;
    onOptionClick: (value: string) => void;
}

const EditorDropdownMenu = ({ iconType, options, onOptionClick }: EditorDropdownMenuProps) => {
    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event: any) => {
        setAnchorEl(event.currentTarget);
    };
    const handleMenuItemClick = (value: string) => {
        onOptionClick(value)
        onClose();
    };
    const onClose = () => {
        setAnchorEl(null);
    };

    const buttonId = React.useId();
    const menuId = React.useId();

    return (
        <>
            <Button
                id={buttonId}
                aria-controls={open ? menuId : undefined}
                onClick={handleClick}
                endIcon={<EditorCarretDownIcon />}
                sx={{
                    padding: "6px",
                    minWidth: "auto",
                    ".MuiButton-endIcon": {
                        marginLeft: "4px",
                        "> .MuiSvgIcon-root": {
                            margin: 0
                        }
                    }
                }}>
                <Icon iconType={iconType} />
            </Button>
            <Menu
                id={menuId}
                anchorEl={anchorEl}
                open={open}
                onClose={onClose}
                MenuListProps={{
                    'aria-labelledby': buttonId,
                }}
                sx={{
                    ".MuiList-root": {
                        padding: 0,
                    }
                }}
            >
                {options.map((option, index) => {
                    return <MenuItem key={option.value}
                        onClick={() => handleMenuItemClick(option.value)}
                        disabled={option.diasbled}
                        divider={option.divider}>

                        {option.iconType &&
                            <ListItemIcon sx={{
                                minWidth: "20px !important",
                                ".MuiSvgIcon-root": {
                                    height: "12px",
                                    width: "12px",
                                }
                            }}>
                                <Icon iconType={option.iconType} />
                            </ListItemIcon>
                        }
                        <ListItemText>
                            {option.label}
                        </ListItemText>
                    </MenuItem>
                })}
            </Menu>

        </>
    );
}

export default EditorDropdownMenu;