import { ComponentStory, ComponentMeta } from '@storybook/react';
import React from 'react';
import { useArgs } from '@storybook/client-api';

import AboutMemberForm from './AboutMemberForm';
import { Paper } from '@mui/material';

export default {
    title: 'Templates/AboutMemberForm',
    component: AboutMemberForm,
    args: {
        data: {
            personalDetails: {
                fullName: "",
                yearOfBirth: "",
                isDead: null,
                yearOfDeath: "",
                ageAtDeath: "",
            },
            medicalHistory: {
                hasCancerDiagnosis: null,
                cancerDiagnoses: []
            },
            geneticTestingHistory: {
                hasDoneGeneticTesting: null,
                foundPathogenicMutations: null,
                pathogenicGeneMutations: [],
            },
        },
    },
} as ComponentMeta<typeof AboutMemberForm>;

const Template: ComponentStory<typeof AboutMemberForm> = (args) => {
    const [{ }, updateArgs] = useArgs();
    const onChange = (data: any) => {
        updateArgs({ data });
    }
    const setHasError = (hasError: boolean) => {
        console.log("hasError", hasError);
    }

    return (<Paper sx={{ paddingTop: 2, paddingBottom: 2 }}>
        <AboutMemberForm {...args} onChange={onChange} setHasError={setHasError} />
    </Paper>);
}

export const Default = Template.bind({});
Default.args = {};

export const WithErrors = Template.bind({});
WithErrors.args = {
    data: {
        personalDetails: {
            fullName: "",
            yearOfBirth: "2045",
            isDead: true,
            yearOfDeath: "2014",
            ageAtDeath: "31",
        },
        medicalHistory: {
            hasCancerDiagnosis: null,
            cancerDiagnoses: []
        },
        geneticTestingHistory: {
            hasDoneGeneticTesting: null,
            foundPathogenicMutations: null,
            pathogenicGeneMutations: [],
        },
    },
};

// export const Story = Template.bind({});
// Story.args = {};
