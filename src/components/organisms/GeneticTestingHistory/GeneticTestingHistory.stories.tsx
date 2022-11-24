import { ComponentStory, ComponentMeta } from '@storybook/react';
import React from 'react';

import GeneticTestingHistory from './GeneticTestingHistory';
import { useArgs } from '@storybook/client-api';

export default {
    title: 'Organisms/GeneticTestingHistory',
    component: GeneticTestingHistory,
    args: {
        data: {
            hasDoneGeneticTesting: null,
            foundPathogenicMutations: null
        },
        forTarget: false
    },
} as ComponentMeta<typeof GeneticTestingHistory>;

const Template: ComponentStory<typeof GeneticTestingHistory> = (args) => {
    const [{ }, updateArgs] = useArgs();
    const onChange = (data: any) => {
        updateArgs({ data });
    }
    return (<GeneticTestingHistory {...args} onChange={onChange} />)
}

export const ForTarget = Template.bind({});
ForTarget.args = { forTarget: true };

export const ForMember = Template.bind({});
ForMember.args = {};

// export const Story = Template.bind({});
// Story.args = {};