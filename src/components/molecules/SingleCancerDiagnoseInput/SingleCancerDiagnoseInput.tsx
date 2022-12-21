import { Stack } from "@mui/system";
import * as React from "react";

import AutocompleteInput from "../AutocompleteInput/AutocompleteInput";
import TextInput from "../TextInput";
import cancerOptions from "./cancerOptions.json";

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

const SingleCancerDiagnoseInput = ({ data, onChange, forTarget = false, id = "" }: ISingleCancerDiagnoseInputProps) => {
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
    const ageLabel = forTarget ? "How old were you when it was first diagnosed?" : "How old were they when it was first diagnosed?"

    return (
        <Stack gap={1.5}>
            <AutocompleteInput label="Which cancer was diagnosed?" options={cancerOptions} value={data.cancerType}
                onChange={handleCancerTypeChange} freeSolo id={`${id}-cancerType`} />
            <TextInput label={ageLabel} value={data.ageAtDiagnosis}
                onChange={handleAgeAtDiagnosisChange} format="age" id={`${id}-ageAtDiagnosis`} />

        </Stack>
    );
}
export default SingleCancerDiagnoseInput;