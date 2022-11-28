import { ComponentStory, ComponentMeta } from '@storybook/react';
import React from 'react';
import { useArgs } from '@storybook/client-api';

import TargetInformationForm from './TargetInformationForm';
import { Stack } from '@mui/system';
import { Button, Box } from '@mui/material';

export default {
    title: 'Templates/TargetInformationForm',
    component: TargetInformationForm,
    args: {
        data: {
            personalDetails: {
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
            },
            medicalHistory: {
                hasCancerDiagnosis: null,
                cancerDiagnoses: [],
            },
            geneticTestingHistory: {
                hasDoneGeneticTesting: null,
                foundPathogenicMutations: null,
                pathogenicGeneMutations: [],
            },
        },
        errors: {
            sexError: "",
            hasAshkenaziJewishBackgroundError: "",
        }
    },
} as ComponentMeta<typeof TargetInformationForm>;

const Template: ComponentStory<typeof TargetInformationForm> = (args) => {

    const [{ data }, updateArgs] = useArgs();
    const onChange = (data: any) => updateArgs({ data });
    const onSubmit = () => {
        let errors = {
            sexError: "",
            hasAshkenaziJewishBackgroundError: ""
        }
        if (data.personalDetails.sex === null)
            errors.sexError = "Required";
        if (data.personalDetails.hasAshkenaziJewishBackground === null)
            errors.hasAshkenaziJewishBackgroundError = "Required";
        updateArgs({ errors });
    }
    const setErrors = (errors: any) => updateArgs({ errors });

    return (
        <Stack gap={3}>
            <TargetInformationForm {...args} onChange={onChange} setErrors={setErrors} />
            <Box sx={{ textAlign: "right" }}>
                <Button variant="contained" onClick={onSubmit}>Submit</Button>
            </Box>
        </Stack>
    )
}

// export const Default = Template.bind({});
// Default.args = {};

export const Default = Template.bind({});
Default.args = {};