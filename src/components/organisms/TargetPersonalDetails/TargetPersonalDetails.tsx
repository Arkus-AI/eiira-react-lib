import * as React from "react";
import { Stack } from "@mui/material";
import { useTranslation } from "react-i18next";

import RadioInput from "../../molecules/RadioInput";
import AutocompleteInput from "../../molecules/AutocompleteInput";
import countryAlpha3Codes from "./countryAlpha3Codes.json";
import AlcoholConsumptionInput, { IAlcoholConsumptionData } from "../../molecules/AlcoholConsumptionInput/AlcoholConsumptionInput";
import TextInput from "../../molecules/TextInput";
import { useHtmlId } from "../../hooks/useHtmlId";

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

const useEthnicityOptions = () => {
    const { t } = useTranslation("ethnicity");
    return React.useMemo(() => ([
        t("African_African-American"),
        t("Asian"),
        t("Arab"),
        t("European"),
        t("Jewish"),
        t("Latino_Hispanic"),
        t("Pacific")
    ]), [t])
}

const useCountriesOptions = () => {
    const { t } = useTranslation("country");
    return React.useMemo(() => countryAlpha3Codes.map(
        (code: string) => t(code)
    ), [t])
}

const TargetPersonalDetails = ({ data, onChange, errors }: ITargetPersonalDetailsProps) => {
    const { t } = useTranslation();
    const onChangeFactory = (key: keyof ITargetPersonalDetailsData) => (value: any) => {
        onChange({ ...data, [key]: value });
    }
    const id = useHtmlId();
    const ethnicityOptions = useEthnicityOptions()
    const countryOptions = useCountriesOptions()

    return (
        <Stack gap={3}>
            <RadioInput label={t('general.input.sexInput.label')} required
                value={data.sex} onChange={onChangeFactory("sex")} options={[
                    { label: t('general.input.sexInput.options.female'), value: "female" },
                    { label: t('general.input.sexInput.options.male'), value: "male" }
                ]} errorText={errors?.sexError} row id={`${id}-sex`}
            />
            <RadioInput label={t('personalDetails.input.hasAshkenaziJewishBackground.label')} required
                value={data.hasAshkenaziJewishBackground}
                onChange={onChangeFactory("hasAshkenaziJewishBackground")}
                options={[
                    { label: t('general.input.options.yes'), value: true },
                    { label: t('general.input.options.no'), value: false },
                    { label: t('general.input.options.unsure'), value: "unsure" },
                ]} errorText={errors?.hasAshkenaziJewishBackgroundError} row
                tooltipText={t('personalDetails.input.hasAshkenaziJewishBackground.tooltipText')}
                id={`${id}-hasAshkenaziJewishBackground`}
            />
            <AutocompleteInput label={t('personalDetails.input.ethnicity.label')}
                value={data.ethnicity}
                onChange={onChangeFactory("ethnicity")}
                options={ethnicityOptions}
                placeholder={t('general.input.placeholder.chooseFromListOrType')}
                freeSolo
                tooltipText={t('personalDetails.input.ethnicity.tooltipText')}
                id={`${id}-ethnicity`}
            />
            <AutocompleteInput label={t('personalDetails.input.countryOfBirth.label')}
                value={data.countryOfBirth}
                onChange={onChangeFactory("countryOfBirth")}
                options={countryOptions}
                placeholder={t('general.input.placeholder.chooseFromListOrType')}
                freeSolo
                id={`${id}-countryOfBirth`}
            />
            <TextInput label={t('personalDetails.input.height.label')}
                value={data.height}
                onChange={onChangeFactory("height")} format="uint"
                id={`${id}-height`}
            />
            <TextInput label={t('personalDetails.input.weight.label')} value={data.weight}
                onChange={onChangeFactory("weight")} format="uint"
                id={`${id}-weight`}
            />
            <RadioInput label={t('personalDetails.input.isSmoking.label')}
                value={data.isSmoking} onChange={onChangeFactory("isSmoking")} options={[
                    { label: t('general.input.options.yes'), value: true },
                    { label: t('general.input.options.no'), value: false },
                ]} row
                id={`${id}-isSmoking`}
            />
            <AlcoholConsumptionInput label={t('personalDetails.input.alcoholConsumption.label')}
                data={data.alcoholConsumption} onChange={onChangeFactory("alcoholConsumption")}
            />
        </Stack>
    )
}

export default TargetPersonalDetails;