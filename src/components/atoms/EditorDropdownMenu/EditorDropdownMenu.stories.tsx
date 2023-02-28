import { ComponentStory, ComponentMeta } from '@storybook/react';
import React from 'react';

import EditorDropdownMenu from './EditorDropdownMenu';

export default {
    title: 'Atoms/EditorDropdownMenu',
    component: EditorDropdownMenu,
    args: {
        iconType: "table",
        options: [{
            label: "Option 1",
            disabled: false,
            value: "option-1",
            divider: true,
        },
        {
            label: "Option 2",
            disabled: false,
            value: "option-2",
        },
        {
            label: "Option 3",
            disabled: true,
            value: "option-3",
        },
        ],
        onOptionClick: (value: string) => { console.log(value) },
    },
} as ComponentMeta<typeof EditorDropdownMenu>;

const Template: ComponentStory<typeof EditorDropdownMenu> = (args) => (
    <EditorDropdownMenu {...args} />
);

export const Default = Template.bind({});
Default.args = {};

export const WithIcons = Template.bind({});
WithIcons.args = {
    options: [{
        label: "Option 1", disabled: false, value: "option-1",
        iconType: "help", divider: true,
    },
    { label: "Option 2", disabled: false, value: "option-2", iconType: "waste-basket", },
    { label: "Option 3", disabled: true, value: "option-3", },
    ],
};
