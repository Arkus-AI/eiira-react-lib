import { ComponentStory, ComponentMeta } from '@storybook/react';
import React from 'react';
import { useArgs } from '@storybook/client-api';

import TargetPersonalDetails from './TargetPersonalDetails';

export default {
    title: 'Organisms/TargetPersonalDetails',
    component: TargetPersonalDetails,
    args: {
        data: {
            sex: null,
            hasAshkenaziJewishBackground: null,
            ethnicity: null,
            countryOfBirth: null,
            height: null,
            weight: null,
            isSmoking: null,
            alcoholConsumption: {
                wine: 0,
                beer: 0,
                alcopop: 0,
                shotOfSpirit: 0,
            },
        }
    },
} as ComponentMeta<typeof TargetPersonalDetails>;

const Template: ComponentStory<typeof TargetPersonalDetails> = (args) => {
    const [{ }, updateArgs] = useArgs();
    const onChange = (data: any) => updateArgs({ data });

    return (<TargetPersonalDetails {...args} onChange={onChange} />);
}

export const Default = Template.bind({});
Default.args = {};
// export const Story = Template.bind({});
// Story.args = {};
