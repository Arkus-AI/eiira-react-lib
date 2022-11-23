import { ComponentStory, ComponentMeta } from '@storybook/react';
import React from 'react';

import { useArgs } from '@storybook/client-api';

import RelativesPersonalDetails from './RelativesPersonalDetails';

export default {
    title: 'Organisms/RelativesPersonalDetails',
    component: RelativesPersonalDetails,
    args: {
        data: {
            fullName: '',
            yearOfBirth: null,
            isDead: null,
            yearOfDeath: null,
        }
    },
} as ComponentMeta<typeof RelativesPersonalDetails>;

const Template: ComponentStory<typeof RelativesPersonalDetails> = (args) => {
    const [{ }, updateArgs] = useArgs();
    const onChange = (data: any) => {
        updateArgs({ data });
    }

    return <RelativesPersonalDetails {...args} onChange={onChange} />
}

export const Story = Template.bind({});
Story.args = {};
