import { ComponentStory, ComponentMeta } from '@storybook/react';
import { List, ListItem, Typography, Paper, Button, ListItemText } from '@mui/material';
import React, { useCallback } from 'react';

import OnbordingCard from './OnbordingCard';

export default {
    title: 'Templates/OnbordingCard',
    component: OnbordingCard,
    args: {
        title: 'Addind details',
        stepIndicator: '1/2',
    },
} as ComponentMeta<typeof OnbordingCard>;

const Template: ComponentStory<typeof OnbordingCard> = (args) => {
    const [open, setOpen] = React.useState(false);
    const [anchorEl, setAnchorEl] = React.useState<HTMLElement | null>(null);
    const setAnchorElAndOpen = React.useCallback((node: HTMLElement | null) => {
        setAnchorEl(node);
        setOpen(true);
    }, [setAnchorEl, setOpen])

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

    return (
        <div>
            <Paper sx={{ height: "100px", width: "110px", margin: "0 auto", padding: "10px" }} ref={setAnchorElAndOpen}> Some anchor component </Paper>
            <OnbordingCard {...args} message={message} open={open} anchorEl={anchorEl} actions={actions} />
        </div >
    );
}

export const BottomEnd = Template.bind({});
BottomEnd.args = { placement: 'bottom-end' };

export const LeftStart = Template.bind({});
LeftStart.args = { placement: "left-start" };

export const RightStart = Template.bind({});
RightStart.args = { placement: "right-start" };
// export const Story = Template.bind({});
// Story.args = {};
