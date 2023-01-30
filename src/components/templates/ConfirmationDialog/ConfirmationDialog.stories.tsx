import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Button, Typography } from "@mui/material";
import React from 'react';
import { useArgs } from '@storybook/client-api';

import ConfirmationDialog from './ConfirmationDialog';

export default {
    title: 'Templates/ConfirmationDialog',
    component: ConfirmationDialog,
    args: {
        title: 'Confirm deletion',
        message: (<>
            <Typography>You're about to delete your personal information draft. This action <strong>cannot be undone.</strong></Typography>
            <Typography mt={3}>Delete the draft?</Typography>
        </>),
        actions: (<>
            <Button onClick={() => { console.log("Delete clicked") }} variant="outlined">Yes, delete</Button>
            <Button onClick={() => { console.log("Do not delete clicked") }} variant="contained">No, do not delete</Button>
        </>),
        isOpen: false,
    },
} as ComponentMeta<typeof ConfirmationDialog>;

const Template: ComponentStory<typeof ConfirmationDialog> = (args) => {

    const [{ }, updateArgs] = useArgs();
    const onClose = () => updateArgs({ isOpen: false });
    const openDialog = () => updateArgs({ isOpen: true });
    return <>
        <Button onClick={openDialog}>Open dialog</Button>
        <ConfirmationDialog {...args} onClose={onClose} />
    </>
}

export const Default = Template.bind({});
Default.args = {};

// export const Story = Template.bind({});
// Story.args = {};