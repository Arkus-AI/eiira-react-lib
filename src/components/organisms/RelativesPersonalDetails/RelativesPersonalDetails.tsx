import { Stack } from "@mui/system";
import * as React from "react";
import TextInput from "../../molecules/TextInput";
import RadioInput from "../../molecules/RadioInput";

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

    return (
        <Stack gap={3}>
            <TextInput label="Full name" value={data.fullName} onChange={onChangeFactory('fullName')} />
            <TextInput label="Year of birth" value={data.yearOfBirth} onChange={onChangeFactory('yearOfBirth')}
                format="year" placeholder="YYYY" errorText={errors?.yearOfBirthError} />
            <RadioInput label="Living?" value={data.isDead} onChange={onChangeFactory('isDead')} options={[
                { label: "Yes, living", value: false },
                { label: "No, deceased", value: true },
            ]} row />
            {data.isDead && <TextInput label="Year of death" value={data.yearOfDeath}
                onChange={onChangeFactory('yearOfDeath')} format="year" placeholder="YYYY"
                errorText={errors?.yearOfDeathError} />}
        </Stack>
    )
}

export default RelativesPersonalDetails;
