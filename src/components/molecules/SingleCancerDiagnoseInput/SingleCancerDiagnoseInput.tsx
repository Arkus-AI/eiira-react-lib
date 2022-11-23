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
}

const SingleCancerDiagnoseInput = ({ data, onChange, forTarget = false }: ISingleCancerDiagnoseInputProps) => {
    const handleCancerTypeChange = (cancerType: string | null) => {
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
        <Stack>
            <AutocompleteInput label="Which cancer was diagnosed?" options={cancerOptions} value={data.cancerType}
                onChange={handleCancerTypeChange} freeSolo />
            <TextInput label={ageLabel} value={data.ageAtDiagnosis}
                onChange={handleAgeAtDiagnosisChange} />

        </Stack>
    );
}
export default SingleCancerDiagnoseInput;