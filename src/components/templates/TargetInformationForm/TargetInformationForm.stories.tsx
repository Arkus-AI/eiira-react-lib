import { ComponentStory, ComponentMeta } from '@storybook/react';
import React from 'react';
import { useArgs } from '@storybook/client-api';

import TargetInformationForm from './TargetInformationForm';

export default {
    title: 'Templates/TargetInformationForm',
    component: TargetInformationForm,
    args: {
        data: {
            personalDetails: {
                sex: null,
                personalNumber: "",
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

    const [{ data, errors }, updateArgs] = useArgs();
    const onChange = (data: any) => updateArgs({ data });

    const runValidation = () => {
        const tmpErrors = { ...errors };
        if (data.personalDetails.sex === null) tmpErrors.sexError = "Required";
        if (data.personalDetails.hasAshkenaziJewishBackground === null)
            tmpErrors.hasAshkenaziJewishBackgroundError = "Required";

        updateArgs({ errors: tmpErrors });
    };

    const setErrors = (errors: any) => updateArgs({ errors });

    return (<TargetInformationForm {...args} onChange={onChange} runValidation={runValidation} setErrors={setErrors} />)
}

// export const Default = Template.bind({});
// Default.args = {};

export const Default = Template.bind({});
Default.args = {};