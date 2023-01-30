import { Button } from '@mui/material';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import React from 'react';
import { useArgs } from '@storybook/client-api';

import SavedSnackbar from './SavedSnackbar';

export default {
    title: 'Molecules/SavedSnackbar',
    component: SavedSnackbar,
    args: {
        open: 'boolean' as unknown as any,
        duration: 5000,
        setOpen: '(open: boolean) => void' as unknown as any
    },
} as ComponentMeta<typeof SavedSnackbar>;

const Template: ComponentStory<typeof SavedSnackbar> = (args) => {
    const [{ }, updateArgs] = useArgs();
    const onBtnClick = () => updateArgs({ open: true });

    return (<>
        <Button onClick={onBtnClick}>Open snackbar</Button>
        <SavedSnackbar {...args} />
    </>
    )
}

export const Story = Template.bind({});
Story.args = {};
