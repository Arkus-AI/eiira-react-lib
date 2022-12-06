import {
    Card, CardActionArea, List, ListItem,
    Typography, Stack, ListItemProps, IconButton, useTheme
} from '@mui/material';
import { styled } from '@mui/system';
import * as React from 'react';

import Icon from '../../atoms/Icon';

export interface IMemberCardProps {
    /**
     * Sex of the member
     */
    sex: "male" | "female";
    /**
     * Members relation to target
     */
    relation: string;
    /**
     * member information is added
     */
    infoIsAdded: boolean;
    /**
     * Members name
     */
    name?: string;
    /** 
     * has cancer history
     */
    hasCancerDiagnose?: boolean;
    /**
     * Is dead
     */
    isDead?: boolean;
    /**
     * Is selected
     */
    isSelected: boolean;
    /**
     * Has errors
     */
    hasErrors: boolean;
    /**
     * Is selectDisabled
     */
    isSelectDisabled?: boolean;
    /**
     * isAddDisabled
     */
    isAddDisabled?: boolean;
    /**
     * onCardClick
     */
    onCardClick: () => void;
    /**
     * onAddClick
     */
    onAddClick: (event: any) => void;
}

const StyledListItem = styled(({ children, ...props }: ListItemProps) =>
    <ListItem {...props} ><Typography variant="caption">{children}</Typography></ListItem>)(({ theme }) => ({
        padding: 0,
        paddingBottom: "4px"
    }));


const FamilyMemberCard = ({ sex, relation, name, infoIsAdded, hasCancerDiagnose,
    isDead = false, isSelected, hasErrors, isSelectDisabled = false, isAddDisabled = false, onCardClick, onAddClick }: IMemberCardProps) => {
    const theme = useTheme();
    let content = <Typography variant="caption" color="primary">Click to add details</Typography>
    if (infoIsAdded) {
        content = (
            <List>
                {name && <StyledListItem>{name}</StyledListItem>}
                {isDead && <StyledListItem>Deceased</StyledListItem>}
                {hasCancerDiagnose && <StyledListItem>Cancer history</StyledListItem>}
            </List>
        )
    }

    const selectedPadding = "5px 1px"
    const defaultShaddow = "0px 3px 5px -2px rgba(0, 0, 0, 0.2), 0px 2px 3px rgba(0, 0, 0, 0.14), 0px 1px 5px rgba(0, 0, 0, 0.12)"
    const hoverShaddow = "0px 2px 4px -1px rgba(0, 0, 0, 0.2), 0px 4px 5px rgba(0, 0, 0, 0.14), 0px 1px 10px rgba(0, 0, 0, 0.12)"

    let cardStyes: any = {
        border: "0px solid white",
        backgroundColor: "white",
        padding: "8px 4px",
        boxShadow: defaultShaddow,
    }

    if (isSelected) {
        cardStyes = { ...cardStyes, border: `3px solid ${theme.palette?.primary.main}`, padding: selectedPadding }
        if (hasErrors) cardStyes = { ...cardStyes, borderColor: theme.palette?.error.main, }
    } else {
        if (hasErrors) cardStyes = { ...cardStyes, border: `2px solid ${theme.palette?.error.main}`, padding: "6px 2px" }
    }

    if (hasCancerDiagnose) cardStyes = { ...cardStyes, backgroundColor: theme.palette?.secondary.main }

    let cardHoverStyles: any = { boxShadow: hoverShaddow }
    if (!isSelectDisabled) cardHoverStyles = { cursor: "pointer", backgroundColor: theme.palette.hover.light }
    if (hasErrors && !isSelected) cardHoverStyles = { cursor: "pointer", border: `2px solid ${theme.palette?.error.dark}`, padding: "6px 2px" }
    if (hasCancerDiagnose) cardHoverStyles = { ...cardHoverStyles, backgroundColor: theme.palette?.secondary.dark }

    if (isSelected) cardHoverStyles = { cursor: "default", backgroundColor: hasCancerDiagnose ? theme.palette?.secondary.light : "white" }

    if (isSelectDisabled) {
        cardStyes = { ...cardStyes, boxShadow: "none", border: `1px solid ${theme.palette?.neutral.containers}` }
        cardHoverStyles = {}
    }


    return (
        <div style={{ position: "relative" }}>
            <Card
                sx={{
                    ...cardStyes,
                    width: "152px",
                    height: "152px",
                    ":hover": {
                        ...cardHoverStyles,
                    }
                }}
            >
                <CardActionArea sx={{
                    height: "100%",
                    ":hover": {
                        backgroundColor: "inherit",
                        ".MuiCardActionArea-focusHighlight": {
                            opacity: 0
                        }
                    },
                }} onClick={onCardClick} disabled={isSelected || isSelectDisabled}>
                    <Stack direction="row" gap={.5}
                        sx={{ height: "100%" }}>
                        <Icon iconType={sex} color="primary" sx={{ fontSize: "20px", lineHeight: "20px" }} />
                        <Stack gap={1}>
                            <Typography variant="h5">{relation}</Typography>
                            {content}
                        </Stack>
                    </Stack>
                </CardActionArea>
            </Card>
            <IconButton disabled={isAddDisabled} onClick={onAddClick}
                sx={{
                    boxShadow: defaultShaddow,
                    backgroundColor: "white",
                    padding: "6px",
                    position: "absolute",
                    bottom: "-18px",
                    left: "50%",
                    transform: "translateX(-50%)",
                    "&:hover": {
                        backgroundColor: "hover.light",
                        boxShadow: hoverShaddow,
                    }
                }}><Icon iconType='plus' color="primary" sx={{ fontSize: "24px" }} /></IconButton>
        </div>
    )
}

export default FamilyMemberCard;