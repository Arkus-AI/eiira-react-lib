import { ComponentStory, ComponentMeta } from '@storybook/react';
import React from 'react';

import { Button } from '@mui/material';

export default {
    title: 'Atoms/Button',
    component: Button,
    args: {
        children: 'Click me'
    }

} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;

export const Default = Template.bind({});
Default.args = {};

export const Filled = Template.bind({});
Filled.args = {
    variant: 'contained'
};

export const Outlined = Template.bind({});
Outlined.args = {
    variant: 'outlined'
};