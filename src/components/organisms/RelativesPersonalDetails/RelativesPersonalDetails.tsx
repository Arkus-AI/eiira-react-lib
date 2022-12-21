import { Stack } from "@mui/system";
import * as React from "react";
import TextInput from "../../molecules/TextInput";
import RadioInput from "../../molecules/RadioInput";
import { useId } from "../../hooks";
import { Typography } from "@mui/material";

export interface IRelativesPersonalDetailsData {
    /**
     * Full name
     */
    fullName: string;
    /**
     * Year of birth
     */
    yearOfBirth: string;
    /**
     * Year of death
     */
    yearOfDeath: string;
    /**
     * Age at death
     */
    ageAtDeath: string;
    /**
     * Is dead
     */
    isDead: boolean | null;
}

export interface IRelativesPersonalDetailsErrors {
    /**
     * year of birth error message
     */
    yearOfBirthError?: string;
    /**
     * year of death error message
     */
    yearOfDeathError?: string;
    /**
     * age at death error message
     */
    ageAtDeathError?: string;
}


export interface RelativesPersonalDetailsProps {
    /**
     * Data for the relatives
     */
    data: IRelativesPersonalDetailsData;
    /**
     * onChange handler
     */
    onChange: (data: IRelativesPersonalDetailsData) => void;
    /** 
     * Error messages for the fields
     */
    errors?: IRelativesPersonalDetailsErrors;
}

const RelativesPersonalDetails = ({ data, onChange, errors }: RelativesPersonalDetailsProps) => {

    const onChangeFactory = (key: keyof IRelativesPersonalDetailsData) => (value: string | boolean | null) => {
        onChange({ ...data, [key]: value });
    }
    const id = useId();

    return (
        <Stack gap={3}>
            <TextInput label="Full name" value={data.fullName}
                onChange={onChangeFactory('fullName')} id={`${id}-fullName`} />
            <TextInput label="Year of birth" value={data.yearOfBirth} onChange={onChangeFactory('yearOfBirth')}
                format="year" placeholder="YYYY" errorText={errors?.yearOfBirthError}
                id={`${id}-yearOfBirth`} />
            <RadioInput label="Living?" value={data.isDead} onChange={onChangeFactory('isDead')} options={[
                { label: "Yes, living", value: false },
                { label: "No, deceased", value: true },
            ]} row id={`${id}-living`} />
            {data.isDead && (<>
                <Stack direction="row" gap={3} alignItems="flex-start">
                    <TextInput label="Year of death" value={data.yearOfDeath}
                        onChange={onChangeFactory('yearOfDeath')} format="year" placeholder="YYYY"
                        errorText={errors?.yearOfDeathError}
                        id={`${id}-yearOfDeath`}
                    />
                    <Typography variant="h5" pt={4}>or</Typography>
                    <TextInput label="Age at death" value={data.ageAtDeath}
                        onChange={onChangeFactory('ageAtDeath')} format="age" placeholder="Age in years"
                        errorText={errors?.ageAtDeathError}
                        id={`${id}-ageAtDeath`}
                    />
                </Stack>
            </>)
            }
        </Stack>
    )
}

export default RelativesPersonalDetails;
