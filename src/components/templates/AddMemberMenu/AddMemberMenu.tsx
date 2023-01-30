import * as React from "react";
import { PopperProps, Popper, Paper, List, ListItemButton, ListItemIcon, Divider, Typography, useTheme } from "@mui/material";
import Icon from "../../atoms/Icon";

interface IAddMemberMenuOption {
    /**
     * Option name
     */
    label: string;
    /**
     * Option icon
     */
    iconType: "waste-basket" | "caret-down" | "xmark" | "circle-xmark" | "users" | "plus";
    /**
     * Option value
     */
    value: string;
}

export interface IAddMemberMenuProps extends PopperProps {
    /**
     * Options to be displayed
     */
    options: IAddMemberMenuOption[];
    /** 
     * onOptionClick
     */
    onOptionClick: (optionValue: string) => void;

}

const OptionButton = ({ option, onOptionClick }: { option: IAddMemberMenuOption, onOptionClick: (optionValue: string) => void }) => {
    const theme = useTheme()
    const divider = (option.value === "delete" || option.value === "deleteMember") ? <Divider /> : null;
    return (
        <>
            {divider}
            <ListItemButton onClick={() => onOptionClick(option.value)}
                key={option.value}
                sx={{
                    padding: "6px 8px", paddingRight: "16px",
                    ":hover": {
                        backgroundColor: theme.palette?.hover.light,
                    }
                }}>
                <ListItemIcon sx={{ minWidth: "unset", marginRight: "8px" }}>
                    <Icon iconType={option.iconType} sx={{
                        fontSize: "12px", lineHeight: "12px",
                        color: theme.palette?.text.primary
                    }} />
                </ListItemIcon>
                <Typography> {option.label} </Typography>
            </ListItemButton>
        </>
    )
}

const AddMemberMenu = ({ options, onOptionClick, ...popperProps }: IAddMemberMenuProps) => {
    return (<Popper {...popperProps} modifiers={
        [{
            name: 'offset',
            options: {
                offset: [0, 4],
            }
        }]
    }>
        <Paper elevation={8}>
            <List>
                {options.map((option, index) => {
                    return <OptionButton key={index} option={option} onOptionClick={onOptionClick} />
                })}
            </List>
        </Paper >
    </Popper >)
}

export default AddMemberMenu;
