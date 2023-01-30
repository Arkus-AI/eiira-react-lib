import { ComponentStory, ComponentMeta } from '@storybook/react';
import React from 'react';
import { useArgs } from '@storybook/client-api';

import PrePedigreeForm from './PrePedigreeForm';

export default {
    title: 'Templates/PrePedigreeForm',
    component: PrePedigreeForm,
    args: {
        initialSex: null,
        isSubmitting: false,
    },
} as ComponentMeta<typeof PrePedigreeForm>;

const Template: ComponentStory<typeof PrePedigreeForm> = (args) => {
    const [{ }, updateArgs] = useArgs();
    const onSubmit = (values: any) => {
        console.log("Submitted values", values);
        updateArgs({ isSubmitting: true });
        setTimeout(() => {
            updateArgs({ isSubmitting: false });
        }, 2000);
    }

    return (<PrePedigreeForm {...args} onSubmit={onSubmit} />)
}

export const Story = Template.bind({});
Story.args = {};
