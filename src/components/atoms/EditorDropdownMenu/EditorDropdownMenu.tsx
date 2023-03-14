import React from "react";
import { Button, Menu, MenuItem, ListItemIcon, ListItemText, ButtonProps } from '@mui/material';
import Icon, { IconProps } from '../Icon/Icon';
import { EditorCarretDownIcon } from '../EditorTextTypeSelector/EditorTextTypeSelector';
import { useTheme } from "@mui/system";

interface EditorDropdownMenuOption extends ButtonProps {
    label: string;
    disabled: boolean;
    value: string;
    iconType?: IconProps['iconType'];
    divider?: boolean;
}


export interface EditorDropdownMenuProps {
    iconType: IconProps['iconType'];
    options: Array<EditorDropdownMenuOption>;
    onOptionClick: (value: string) => void;
    selected?: boolean;
}

const EditorDropdownMenu = ({ iconType, options, onOptionClick, selected, ...buttonProps }: EditorDropdownMenuProps) => {
    const theme = useTheme();
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
                className={`${selected ? "selected" : ""}`}
                id={buttonId}
                aria-controls={open ? menuId : undefined}
                onClick={handleClick}
                endIcon={<EditorCarretDownIcon />}
                sx={{
                    padding: "6px",
                    height: "32px",
                    minWidth: "auto",
                    color: theme.palette.text?.primary,
                    "&.selected": {
                        color: theme.palette.primary?.main,
                    },
                    ".MuiButton-endIcon": {
                        marginLeft: "4px",
                        "> .MuiSvgIcon-root": {
                            margin: 0,
                        }
                    }
                }}
                {...buttonProps} >
                <Icon iconType={iconType} style={{
                    fontSize: "16px"
                }} />
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
                        disabled={option.disabled}
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