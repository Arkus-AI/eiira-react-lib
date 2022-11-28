import { ComponentStory, ComponentMeta } from '@storybook/react';
import React from 'react';

import AlcoholConsumptionInput from './AlcoholConsumptionInput';

export default {
    title: 'Molecules/AlcoholConsumptionInput',
    component: AlcoholConsumptionInput,
    args: {
        data: {
            wine: 0,
            beer: 0,
            alcopop: 0,
            shotOfSpirit: 0,
        },
        label: 'If you drink alcohol, how much of the following do you usually consume per week?',
    },
} as ComponentMeta<typeof AlcoholConsumptionInput>;

const Template: ComponentStory<typeof AlcoholConsumptionInput> = (args) => (
    <AlcoholConsumptionInput {...args} />
);

export const Default = Template.bind({});
Default.args = {};
// export const Story = Template.bind({});
// Story.args = {};
// export const Story = Template.bind({});
// Story.args = {};
