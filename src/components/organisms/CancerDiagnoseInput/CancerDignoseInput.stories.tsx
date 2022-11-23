import { ComponentStory, ComponentMeta } from '@storybook/react';
import React from 'react';

import { useArgs } from '@storybook/client-api';

import CancerDignoseInput, { ICancerDiagnoseInputData } from './CancerDignoseInput';

export default {
    title: 'Organisms/CancerDignoseInput',
    component: CancerDignoseInput,
    args: {
        data: {
            hasCancerDiagnosis: null,
            cancerDiagnoses: {}
        },
        forTarget: false
    },
} as ComponentMeta<typeof CancerDignoseInput>;

const Template: ComponentStory<typeof CancerDignoseInput> = (args) => {
    const [{ }, updateArgs] = useArgs();
    const onChange = (data: ICancerDiagnoseInputData) => {
        updateArgs({ data });
    }
    return (<CancerDignoseInput {...args} onChange={onChange} />);
}

export const ForTarget = Template.bind({});
ForTarget.args = { forTarget: true };

export const ForMember = Template.bind({});
ForMember.args = { forTarget: false };