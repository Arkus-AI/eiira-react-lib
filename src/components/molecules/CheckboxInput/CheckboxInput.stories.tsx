import { ComponentStory, ComponentMeta } from '@storybook/react';
import React from 'react';
import { useArgs } from '@storybook/client-api';

import CheckboxInput, { CheckboxInputValues } from './CheckboxInput';

export default {
    title: 'Molecules/CheckboxInput',
    component: CheckboxInput,
    args: {
        label: 'Some random label',
        options: [{ label: 'Option 1', value: 'option1' }, { label: 'Option 2', value: 'option2' }],
        value: { option1: true, option2: false },
        errorText: '',
        helperText: '',
        tooltipText: '',
        required: false,
        row: false
    },
} as ComponentMeta<typeof CheckboxInput>;

const Template: ComponentStory<typeof CheckboxInput> = (args) => {
    const [{ }, updateArgs] = useArgs();
    const onChange = (newValues: CheckboxInputValues) => {
        updateArgs({ value: newValues });
    };

    return (<CheckboxInput {...args} onChange={onChange} />);
}

export const Default = Template.bind({});
Default.args = {};

export const WithAnError = Template.bind({});
WithAnError.args = { errorText: "Some kind of error" };

export const WithATooltip = Template.bind({});
WithATooltip.args = { tooltipText: "Some kind of tooltip text here" };

export const WithAHelperText = Template.bind({});
WithAHelperText.args = { helperText: "Some kind of helper text here" };

export const OnARow = Template.bind({});
OnARow.args = { row: true };
// export const Story = Template.bind({});
// Story.args = {};
// export const Story = Template.bind({});
// Story.args = {};
