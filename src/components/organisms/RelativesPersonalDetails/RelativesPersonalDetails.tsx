import { Box, Stack } from "@mui/system";
import * as React from "react";
import TextInput from "../../molecules/TextInput";
import RadioInput from "../../molecules/RadioInput";

interface RelativesPersonalDetailsData {
    /**
     * Full name
     */
    fullName: string;
    /**
     * Year of birth
     */
    yearOfBirth: number | null;
    /**
     * Year of death
     */
    yearOfDeath: number | null;
    /**
     * Is dead
     */
    isDead: boolean | null;
}

export interface RelativesPersonalDetailsProps {
    /**
     * Data for the relatives
     */
    data: RelativesPersonalDetailsData;
    /**
     * onChange handler
     */
    onChange: (data: RelativesPersonalDetailsData) => void;
}

const RelativesPersonalDetails = ({ data, onChange }: RelativesPersonalDetailsProps) => {

    const onChangeFactory = (key: keyof RelativesPersonalDetailsData) => (value: string | boolean | null) => {
        onChange({ ...data, [key]: value });
    }

    return (
        <Stack gap={3}>
            <TextInput label="Full name" value={data.fullName} onChange={onChangeFactory('fullName')} />
            <TextInput label="Year of birth" value={data.yearOfBirth} onChange={onChangeFactory('yearOfBirth')} format="year" placeholder="YYYY" />
            <RadioInput label="Living?" value={data.isDead} onChange={onChangeFactory('isDead')} options={[
                { label: "Yes, living", value: false },
                { label: "No, deceased", value: true },
            ]} row />
            {data.isDead && <TextInput label="Year of death" value={data.yearOfDeath} onChange={onChangeFactory('yearOfDeath')} format="year" placeholder="YYYY" />}
        </Stack>
    )
}

export default RelativesPersonalDetails;
