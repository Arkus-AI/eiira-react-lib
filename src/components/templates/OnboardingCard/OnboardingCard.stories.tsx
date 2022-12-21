import { ComponentStory, ComponentMeta } from '@storybook/react';
import { List, ListItem, Typography, Paper, Button, Box } from '@mui/material';
import React from 'react';

import OnboardingCard from './OnboardingCard';

export default {
    title: 'Templates/OnboardingCard',
    component: OnboardingCard,
    args: {
        title: 'Adding details',
        stepIndicator: '1/2',
    },
} as ComponentMeta<typeof OnboardingCard>;

const Template: ComponentStory<typeof OnboardingCard> = (args) => {
    const [open, setOpen] = React.useState(false);
    // const [anchorEl, setAnchorEl] = React.useState<HTMLElement | null>(null);
    // const setAnchorElAndOpen = React.useCallback((node: HTMLElement | null) => {
    //     setAnchorEl(node);
    //     setOpen(true);
    // }, [setAnchorEl, setOpen])

    const message = (
        <>
            <Typography> We'll need to know some details about your family:</Typography>
            <List sx={{ listStyleType: 'disc', pl: "20px", pt: "0", pb: 2, li: { padding: 0 } }} dense>
                <ListItem sx={{ display: 'list-item' }}> <strong>Age</strong> and <strong>status</strong> of your relatives </ListItem>
                <ListItem sx={{ display: 'list-item' }}> Did anyone have <strong>cancer</strong>? </ListItem>
                <ListItem sx={{ display: 'list-item' }}> Has anyone done a <strong>genetic test</strong>? </ListItem>
            </List >
            <Typography> It's okay if you don't remember the exact details. Just tells us as much as you can.  </Typography>
        </>
    )

    const actions = (
        <>
            <Button variant="outlined" onClick={() => setOpen(false)}>Skip tour</Button>
            <Button variant="contained" onClick={() => setOpen(false)}>Next</Button>
        </>
    )

    return (<>
        <Button onClick={() => setOpen(true)}>Open</Button>
        <OnboardingCard {...args} message={message} open={open} actions={actions} />
    </>
    );
}

export const Default = Template.bind({});
Default.args = {};
