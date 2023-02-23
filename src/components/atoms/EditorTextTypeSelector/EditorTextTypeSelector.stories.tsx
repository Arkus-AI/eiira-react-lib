import { ComponentStory, ComponentMeta } from '@storybook/react';
import React from 'react';
import { useArgs } from '@storybook/client-api';

import EditorTextTypeSelector from './EditorTextTypeSelector';

export default {
    title: 'Atoms/EditorTextTypeSelector',
    component: EditorTextTypeSelector,
    args: {
        options: [{
            value: 'paragraph',
            label: 'Normal text',
            typographyVariant: 'body1'
        }, {
            value: 'h1',
            label: 'Heading 1',
            typographyVariant: 'h1'
        }, {
            value: 'h2',
            label: 'Heading 2',
            typographyVariant: 'h2'
        }, {
            value: 'h3',
            label: 'Heading 3',
            typographyVariant: 'h3'
        }],
        selectedValue: 'paragraph',
        onChange: '(value: string) => void' as unknown as any
    },
} as ComponentMeta<typeof EditorTextTypeSelector>;

const Template: ComponentStory<typeof EditorTextTypeSelector> = (args) => {
    const [{ }, updateArgs] = useArgs();
    const onChange = (value: any) => {
        updateArgs({ selectedValue: value });
    }
    return <EditorTextTypeSelector {...args} onChange={onChange} />
};

export const Default = Template.bind({});
Default.args = {};

export const Disabled = Template.bind({});
Disabled.args = {
    disabled: true
};
