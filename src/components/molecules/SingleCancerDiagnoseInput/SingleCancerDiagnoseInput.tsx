import { Stack } from "@mui/system";
import * as React from "react";
import { useTranslation } from "react-i18next";

import AutocompleteInput from "../AutocompleteInput/AutocompleteInput";
import TextInput from "../TextInput";
import CANCER_OPTIONS from "./cancerOptions.json";

export interface ISingleCancerDiagnoseData {
    /**
     * Cancer type
     */
    cancerType: string | null;
    /** 
     * Age when diagnosed
     */
    ageAtDiagnosis: string;
}

export interface ISingleCancerDiagnoseInputProps {
    /**
     * Cancer diagnose data
     */
    data: ISingleCancerDiagnoseData;
    /**
     * onChange handler
     */
    onChange: (data: ISingleCancerDiagnoseData) => void;
    /**
     * For target
     */
    forTarget?: boolean;
    /**
     * Id
     */
    id?: string;
}

const useCancerOptions = () => {
    const { t } = useTranslation("cancer");
    return React.useMemo(() => CANCER_OPTIONS.map((option: string) =>
        t(`${option}`)), [t]);
}

const SingleCancerDiagnoseInput = ({ data, onChange, forTarget = false, id = "" }: ISingleCancerDiagnoseInputProps) => {
    const { t } = useTranslation();
    const cancerOptions = useCancerOptions();
    const handleCancerTypeChange = (cancerType: any) => {
        onChange({
            ...data,
            cancerType
        });
    }

    const handleAgeAtDiagnosisChange = (ageAtDiagnosis: string) => {
        onChange({
            ...data,
            ageAtDiagnosis
        });
    }

    const ageLabel = t('medicalHistory.input.ageAtDiagnosis.label',
        { subject: forTarget ? t('subject.you') : t('subject.they') })

    return (
        <Stack gap={1.5}>
            <AutocompleteInput label={t('medicalHistory.input.cancerType.label')}
                options={cancerOptions} value={data.cancerType}
                onChange={handleCancerTypeChange} freeSolo
                id={`${id}-cancerType`}
                placeholder={t('medicalHistory.input.cancerType.placeholder')} />
            <TextInput label={ageLabel} value={data.ageAtDiagnosis}
                onChange={handleAgeAtDiagnosisChange} format="age" id={`${id}-ageAtDiagnosis`} />

        </Stack>
    );
}
export default SingleCancerDiagnoseInput;