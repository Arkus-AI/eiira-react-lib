import { ComponentStory, ComponentMeta } from '@storybook/react';
import React from 'react';
import { useArgs } from '@storybook/client-api';

import AutocompleteInput from './AutocompleteInput';

export default {
    title: 'Molecules/AutocompleteInput',
    component: AutocompleteInput,
    args: {
        label: 'Autocomplete label',
        options: ["Some kind of label", "Another kind of label"],
        value: "",
        placeholder: 'This is a placeholder',
        multiple: false,
        freeSolo: true,
        tooltipText: '',
        errorText: '',
        helperText: '',
        required: false
    },
} as ComponentMeta<typeof AutocompleteInput>;

const Template: ComponentStory<typeof AutocompleteInput> = (args) => {
    const [{ }, updateArgs] = useArgs();
    const onChange = (value: any) => {
        updateArgs({ value });
    }
    return (<AutocompleteInput {...args} onChange={onChange} />)
}

export const Default = Template.bind({});
Default.args = {};
export const FreeTextSolo = Template.bind({});
FreeTextSolo.args = {
    freeSolo: true,
};
export const Multiple = Template.bind({});
Multiple.args = {
    multiple: true,
};
// export const Story = Template.bind({});
// Story.args = {};
// export const Story = Template.bind({});
// Story.args = {};
