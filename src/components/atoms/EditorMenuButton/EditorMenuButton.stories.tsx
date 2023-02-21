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

export const Story = Template.bind({});
Story.args = {};
