import { ComponentStory, ComponentMeta } from '@storybook/react';
import React from 'react';
import { useArgs } from '@storybook/client-api';

import FamilyMemberCard from './FamilyMemberCard';
import { Box } from '@mui/system';
import { ClickAwayListener, Typography, Stack } from '@mui/material';

export default {
    title: 'Templates/FamilyMemberCard',
    component: FamilyMemberCard,
    args: {
        sex: "male",
        relation: "Father's brothers",
        name: 'John Doe',
        infoIsAdded: true,
    },
} as ComponentMeta<typeof FamilyMemberCard>;

const Template: ComponentStory<typeof FamilyMemberCard> = (args) => {
    const [{ isSelected }, updateArgs] = useArgs();
    const handleOnCardClick = () => {
        updateArgs({ isSelected: true })
    }
    return (
        < Stack gap={4} alignItems="center">
            <Box>
                <Typography>Click on the node to select</Typography>
                <Typography>Click outsuide the nodde to remove selection</Typography>
            </Box>
            <ClickAwayListener onClickAway={() => updateArgs({ isSelected: false })} >
                <Box> <FamilyMemberCard {...args} onCardClick={handleOnCardClick} /> </Box>
            </ClickAwayListener>
            <Box>
                isSelected: {isSelected ? "true" : "false"}
            </Box>
        </Stack >
    )
}

export const Default = Template.bind({});
Default.args = {};

export const hasErrors = Template.bind({});
hasErrors.args = { hasErrors: true };

export const hasCancerDiagnosis = Template.bind({});
hasCancerDiagnosis.args = { hasCancerDiagnose: true, isDead: true };

export const hasCancerDiagnosisAndHasErrors = Template.bind({});
hasCancerDiagnosisAndHasErrors.args = { hasCancerDiagnose: true, hasErrors: true };

export const cardDisabled = Template.bind({});
cardDisabled.args = { isSelectDisabled: true };

// export const Story = Template.bind({});
// Story.args = {};

// export const Story = Template.bind({});
// Story.args = {};