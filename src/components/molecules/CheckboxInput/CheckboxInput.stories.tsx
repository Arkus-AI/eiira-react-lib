import { ComponentStory, ComponentMeta } from '@storybook/react';
import React from 'react';

import CheckboxInput from './CheckboxInput';

export default {
    title: 'Molecules/CheckboxInput',
    component: CheckboxInput,
    args: {
        label: 'string',
        options: 'CheckboxInputOptions' as unknown as any,
        value: 'CheckboxInputValues' as unknown as any,
        onChange: '(event: CheckboxInputValues) => void' as unknown as any,
        errorText: 'string',
        helperText: 'string',
        tooltipText: 'string',
        required: 'boolean' as unknown as any
    },
} as ComponentMeta<typeof CheckboxInput>;

const Template: ComponentStory<typeof CheckboxInput> = (args) => (
    <CheckboxInput {...args} />
);

export const Story = Template.bind({});
Story.args = {};
