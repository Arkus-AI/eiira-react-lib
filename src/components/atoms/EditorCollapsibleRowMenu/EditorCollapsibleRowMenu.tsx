import React from 'react';
import {
    useTheme, Collapse, List,
    ListItem, ListItemButton, Paper
} from '@mui/material';

interface IMenuItem {
    label: string;
    value: string;
}

export interface EditorCollapsibleRowMenuProps {
    menuOpen: boolean;
    menuItems: Array<IMenuItem>;
    selectedItem: string;
    onMenuItemClick: (value: IMenuItem['value']) => void;
}

const EditorCollapsibleRowMenu = ({ menuOpen, menuItems, selectedItem, onMenuItemClick }: EditorCollapsibleRowMenuProps) => {
    const theme = useTheme();

    return (
        <Paper
            sx={{
                margin: "0 auto", marginTop: "8px",
                backgroundColor: "white",
                position: "absolute", left: "50%",
                transform: "translateX(-50%)",
                overflow: "hidden", zIndex: 100
            }}
        >

            <Collapse in={menuOpen}>
                <List sx={{
                    display: "flex",
                    flexDirection: "row",
                    padding: 0,
                    li: {
                        margin: 0,
                        whiteSpace: "nowrap",
                        ".Mui-selected": {
                            backgroundColor: theme.palette.primary.main,
                            color: "white",
                            "&:hover": {
                                backgroundColor: theme.palette.primary.main,
                            }
                        }
                    }
                }}>
                    {menuItems.map(({ label, value }, index) => (
                        <ListItem disablePadding key={index}>
                            <ListItemButton selected={value === selectedItem}
                                onClick={() => onMenuItemClick(value)}>
                                {label}
                            </ListItemButton>
                        </ListItem>
                    ))}
                </List>
            </Collapse>
        </Paper>

    );
}

export default EditorCollapsibleRowMenu;