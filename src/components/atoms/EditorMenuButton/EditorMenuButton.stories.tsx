import { ComponentStory, ComponentMeta } from '@storybook/react';
import React from 'react';

import EditorMenuButton from './EditorMenuButton';

export default {
    title: 'Atoms/EditorMenuButton',
    component: EditorMenuButton,
    args: {
        icon: "help"
    },
} as ComponentMeta<typeof EditorMenuButton>;

const Template: ComponentStory<typeof EditorMenuButton> = (args) => (
    <EditorMenuButton {...args} />
);

export const Default = Template.bind({});
Default.args = {};

export const Disabled = Template.bind({});
Disabled.args = { disabled: true };

export const Selected = Template.bind({});
Selected.args = { selected: true };