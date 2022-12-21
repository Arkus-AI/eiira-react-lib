import * as React from "react";
import { Stack } from "@mui/material";
import { useTranslation } from "react-i18next";

import RadioInput from "../../molecules/RadioInput";
import AutocompleteInput from "../../molecules/AutocompleteInput";
import countryOptions from "./countries.json";
import AlcoholConsumptionInput, { IAlcoholConsumptionData } from "../../molecules/AlcoholConsumptionInput/AlcoholConsumptionInput";
import TextInput from "../../molecules/TextInput";
import { useId } from "../../hooks";

export interface ITargetPersonalDetailsData {
    /** 
     * * Persons sex
     */
    sex: "male" | "female" | null;
    /**
     * Has Ashkenazi Jewish background
     */
    hasAshkenaziJewishBackground: boolean | "unsure" | null;
    /**
     * ethnicity
     */
    ethnicity: string | null;
    /**
     * country of birth
     */
    countryOfBirth: string | null;
    /**
     * Persons height
     */
    height: number | null;
    /**
     * Persons weight
     */
    weight: number | null;
    /**
     * Is Person smoking
     */
    isSmoking: boolean | null;
    /**
     * Alcohol consumtion per week
     */
    alcoholConsumption: IAlcoholConsumptionData;
}

export interface ITargetPersonalDetailsErrors {
    /**
     * sex error message
     * @default ""
     */
    sexError?: string;
    /**
     * hasAshkenaziJewishBackground error message
     * @default ""
     */
    hasAshkenaziJewishBackgroundError?: string;
}

export interface ITargetPersonalDetailsProps {
    /**
     * Target data
     */
    data: ITargetPersonalDetailsData;
    /**
     * onChange handler
     */
    onChange: (data: ITargetPersonalDetailsData) => void;
    /**
     * Error messages for the fields
     */
    errors?: ITargetPersonalDetailsErrors;
}

const ethnicityOptions = [
    "African / African American",
    "Asian",
    "Arab",
    "European",
    "Jewish",
    "Latino / Hispanic",
    "Pacific",
]

const TargetPersonalDetails = ({ data, onChange, errors }: ITargetPersonalDetailsProps) => {
    const { t } = useTranslation();
    const onChangeFactory = (key: keyof ITargetPersonalDetailsData) => (value: any) => {
        onChange({ ...data, [key]: value });
    }
    const id = useId();

    return (
        <Stack gap={3}>
            <RadioInput label={t("What is your biological sex?")} required
                value={data.sex} onChange={onChangeFactory("sex")} options={[
                    { label: t("Female"), value: "female" },
                    { label: t("Male"), value: "male" }
                ]} errorText={errors?.sexError} row id={`${id}-sex`}
            />
            <RadioInput label={t("Do you have any Ashkenazi Jewish ancestors?")} required
                value={data.hasAshkenaziJewishBackground} onChange={onChangeFactory("hasAshkenaziJewishBackground")} options={[
                    { label: t("Yes"), value: true },
                    { label: t("No"), value: false },
                    { label: t("Unsure"), value: "unsure" },
                ]} errorText={errors?.hasAshkenaziJewishBackgroundError} row
                tooltipText={t("Ashkenazi Jewish ancestry has a specific impact on the genetic risk factors. We're asking this information to ensure the accuracy of your risk assessment.")}
                id={`${id}-hasAshkenaziJewishBackground`}
            />
            <AutocompleteInput label={t("Your ethnicity")} value={data.ethnicity}
                onChange={onChangeFactory("ethnicity")}
                options={ethnicityOptions} placeholder="Choose or add one" freeSolo
                tooltipText={t("Your biological ancestry is one of the important factors when assessing genetic risk factors for common diseases.")}
                id={`${id}-ethnicity`}
            />
            <AutocompleteInput label={t("Your country of birth")} value={data.countryOfBirth}
                onChange={onChangeFactory("countryOfBirth")}
                options={countryOptions} placeholder="Choose or add one" freeSolo
                id={`${id}-countryOfBirth`}
            />
            <TextInput label={t("How tall are you? (cm)")} value={data.height}
                onChange={onChangeFactory("height")} format="uint"
                id={`${id}-height`}
            />
            <TextInput label={t("What is your weight? (kg)")} value={data.weight}
                onChange={onChangeFactory("weight")} format="uint"
                id={`${id}-weight`}
            />
            <RadioInput label={t("Do you smoke?")}
                value={data.isSmoking} onChange={onChangeFactory("isSmoking")} options={[
                    { label: t("Yes"), value: true },
                    { label: t("No"), value: false },
                ]} row
                id={`${id}-isSmoking`}
            />
            <AlcoholConsumptionInput label={t("If you drink alcohol, how much of the following do you usually consume per week?")}
                data={data.alcoholConsumption} onChange={onChangeFactory("alcoholConsumption")}
            />
        </Stack>
    )
}

export default TargetPersonalDetails;