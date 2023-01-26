import { Stack } from "@mui/system";
import * as React from "react";

import RadioInput from "../../molecules/RadioInput";
import { ISingleCancerDiagnoseData } from "../../molecules/SingleCancerDiagnoseInput/SingleCancerDiagnoseInput";
import SingleCancerDiagnoseInput from "../../molecules/SingleCancerDiagnoseInput";
import { Box, Button } from "@mui/material";
import { useHtmlId } from "../../hooks/useHtmlId";
import { useTranslation } from "react-i18next";

export interface ICancerDiagnoseInputData {
    /**
     * Has a cancer diagnosis
     */
    hasCancerDiagnosis: string | boolean | null;
    /**
     * Array of cancer diagnoses 
     */
    cancerDiagnoses: Array<ISingleCancerDiagnoseData>;
}


export interface ICancerDiagnoseInputProps {
    /**
     * Cancer diagnose data
     */
    data: ICancerDiagnoseInputData;
    /**
     * onChange handler
     */
    onChange: (data: ICancerDiagnoseInputData) => void;
    /**
     * For target
     */
    forTarget?: boolean;
}

const CancerDiagnoseInput = ({ data, onChange, forTarget = false }: ICancerDiagnoseInputProps) => {
    const { t } = useTranslation();

    // When user selects no we clear the cancer diagnoses
    // Is user selects yes we add a new empty cancer diagnosis
    React.useEffect(() => {
        if ((!data.hasCancerDiagnosis || data.hasCancerDiagnosis === null) && data.cancerDiagnoses.length > 0) {
            onChange({
                ...data,
                cancerDiagnoses: []
            });
        } else if (data.hasCancerDiagnosis && data.cancerDiagnoses.length === 0) {
            onChange({
                ...data,
                cancerDiagnoses: [{
                    cancerType: "",
                    ageAtDiagnosis: ""
                }]
            });
        }
    }, [data.hasCancerDiagnosis]);

    const onCancerDiagnoseChangeFactory = (index: number) => (cancerDiagnose: ISingleCancerDiagnoseData) => {
        const newCancerDiagnoses = [...data.cancerDiagnoses];
        newCancerDiagnoses[index] = cancerDiagnose;
        onChange({
            ...data,
            cancerDiagnoses: newCancerDiagnoses
        });
    }

    const onAddCancerDiagnose = () => {
        const newCancerDiagnoses = [...data.cancerDiagnoses];
        newCancerDiagnoses.push({
            cancerType: "",
            ageAtDiagnosis: ""
        });
        onChange({
            ...data,
            cancerDiagnoses: newCancerDiagnoses
        })
    }

    const hasCancerDiagnosisLabel = t('about.medicalHistory.input.hasCancerDiagnosis.label',
        { subject: forTarget ? t('subject.you') : t('subject.they')})


    const id = useHtmlId();

    return (
        <Stack gap={3}>
            <RadioInput label={hasCancerDiagnosisLabel} value={data.hasCancerDiagnosis}
                onChange={(value: string | boolean | null) => onChange({ ...data, hasCancerDiagnosis: value })}
                options={[{ label: t('general.input.options.yes'), value: true }, { label: t('general.input.options.no'), value: false }]} row
                id={`${id}-hasCancerDiagnosis`}
            />
            {data.hasCancerDiagnosis && Array.isArray(data.cancerDiagnoses) && (
                data.cancerDiagnoses?.map((cancerDiagnose, index) => (
                    <SingleCancerDiagnoseInput key={index} data={cancerDiagnose}
                        onChange={onCancerDiagnoseChangeFactory(index)} forTarget={forTarget}
                        id={`${id}-${index}`} />
                )))}
            {data.hasCancerDiagnosis && (
                <Box>
                    <Button onClick={onAddCancerDiagnose} variant="outlined">{t('about.medicalHistory.button.addAnother')}</Button>
                </Box>
            )}

        </Stack>
    );
}

export default CancerDiagnoseInput;