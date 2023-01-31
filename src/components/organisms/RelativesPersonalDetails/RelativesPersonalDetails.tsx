import { Stack } from "@mui/system";
import * as React from "react";
import TextInput from "../../molecules/TextInput";
import RadioInput from "../../molecules/RadioInput";
import { useHtmlId } from "../../hooks/useHtmlId";
import { Typography } from "@mui/material";
import { useTranslation } from "react-i18next";

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

    const { t } = useTranslation();

    const onChangeFactory = (key: keyof IRelativesPersonalDetailsData) => (value: string | boolean | null) => {
        onChange({ ...data, [key]: value });
    }
    const id = useHtmlId();
    if (!data) return null;

    return (
        <Stack gap={3}>
            <TextInput label={t('personalDetails.input.fullName.label')}
                value={data.fullName}
                onChange={onChangeFactory('fullName')} id={`${id}-fullName`} />
            <TextInput label={t('personalDetails.input.yearOfBirth.label')}
                value={data.yearOfBirth} onChange={onChangeFactory('yearOfBirth')}
                format="year" placeholder="YYYY" errorText={errors?.yearOfBirthError}
                id={`${id}-yearOfBirth`} />
            <RadioInput label={t('personalDetails.input.isAlive.label')}
                value={data.isDead} onChange={onChangeFactory('isDead')} options={[
                    { label: t('personalDetails.input.isAlive.options.yes'), value: false },
                    { label: t('personalDetails.input.isAlive.options.no'), value: true },
                ]} row id={`${id}-living`} />
            {data.isDead && (<>
                <Stack direction="row" gap={3} alignItems="flex-start">
                    <TextInput label={t('personalDetails.input.yearOfDeath.label')}
                        value={data.yearOfDeath} onChange={onChangeFactory('yearOfDeath')}
                        format="year" placeholder="YYYY"
                        errorText={errors?.yearOfDeathError}
                        id={`${id}-yearOfDeath`}
                    />
                    <Typography variant="h5" pt={4}>{t('personalDetails.or')}</Typography>
                    <TextInput label={t('personalDetails.input.ageAtDeath.label')}
                        value={data.ageAtDeath}
                        onChange={onChangeFactory('ageAtDeath')} format="age"
                        placeholder={t('personalDetails.input.ageAtDeath.placeholder')}
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
