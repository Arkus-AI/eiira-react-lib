import { ComponentStory, ComponentMeta } from '@storybook/react';
import React from 'react';

import PedigreeMemberCard  from './PedigreeMemberCard';

export default {
    title: 'Molecules/PedigreeMemberCard',
    component: PedigreeMemberCard,
    args: {
        relationship: 'Father',
        sex: "male",
        selected: false,
        onCardClick: () => { console.log('Card clicked') },
        onAddClick: () => { console.log('Add clicked') },
        otherInfo: {
            name: 'John Doe',
            isCancerDiagnosed: true,
            isDiseased: false
        }
    },
} as ComponentMeta<typeof PedigreeMemberCard>;

const Template: ComponentStory<typeof PedigreeMemberCard> = (args) => (
    <PedigreeMemberCard {...args} />
);

export const Story = Template.bind({});
Story.args = {};
