import { ComponentStory, ComponentMeta } from '@storybook/react';
import { useArgs } from '@storybook/client-api';

import React from 'react';

import RadioInput from './RadioInput';

export default {
    title: 'Molecules/RadioInput',
    component: RadioInput,
    args: {
        label: 'Some kind of label',
        options: [
            { label: "Some kind of label", value: "Some kind of value" },
            { label: "Another kind of label", value: "Another kind of value" }],
        value: "Some kind of value",
    },
} as ComponentMeta<typeof RadioInput>;

const Template: ComponentStory<typeof RadioInput> = (args) => {
    const [{ }, updateArgs] = useArgs();
    const onChange = (value: string | boolean | null) => {
        updateArgs({ value });
    };
    return <RadioInput {...args} onChange={onChange} />
};

export const Default = Template.bind({});
Default.args = {};

export const WithAnError = Template.bind({});
WithAnError.args = { errorText: "Some kind of error" };

export const Required = Template.bind({});
Required.args = { required: true };

export const WithAHelperText = Template.bind({});
WithAHelperText.args = { helperText: "Some kind of helper text here" };

export const WithATooltip = Template.bind({});
WithATooltip.args = { tooltipText: "Some kind of tooltip text here" };

export const OnARow = Template.bind({});
OnARow.args = { row: true };

// export const Story = Template.bind({});
// Story.args = { };
// export const Story = Template.bind({});
// Story.args = { };