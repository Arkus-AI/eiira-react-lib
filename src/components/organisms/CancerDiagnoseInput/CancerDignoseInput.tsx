import { Stack } from "@mui/system";
import * as React from "react";

import RadioInput from "../../molecules/RadioInput";
import { ISingleCancerDiagnoseData } from "../../molecules/SingleCancerDiagnoseInput/SingleCancerDiagnoseInput";
import SingleCancerDiagnoseInput from "../../molecules/SingleCancerDiagnoseInput";
import { Button } from "@mui/material";

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
    function addFirstEmptyCancerDiagnose() {
        onChange({
            ...data,
            cancerDiagnoses: [{
                cancerType: "",
                ageAtDiagnosis: ""
            }]
        });
    }

    // When user selects no we clear the cancer diagnoses
    // Is user selects yes we add a new empty cancer diagnosis
    React.useEffect(() => {
        if (!data.hasCancerDiagnosis || data.hasCancerDiagnosis === null) {
            onChange({
                ...data,
                cancerDiagnoses: []
            });
        } else {
            addFirstEmptyCancerDiagnose();
        }
    }, [data.hasCancerDiagnosis]);

    React.useEffect(() => { if (data.hasCancerDiagnosis) addFirstEmptyCancerDiagnose(); }, []);

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

    const hasCancerDiagnosisLabel = forTarget ? "Have you ever been diagnosed with cancer?" : "Have they ever been diagnosed with cancer?"

    return (
        <Stack gap={3}>
            <RadioInput label={hasCancerDiagnosisLabel} value={data.hasCancerDiagnosis}
                onChange={(value: string | boolean | null) => onChange({ ...data, hasCancerDiagnosis: value })}
                options={[{ label: "Yes", value: true }, { label: "No", value: false }]} row />
            {data.hasCancerDiagnosis && Array.isArray(data.cancerDiagnoses) && (
                data.cancerDiagnoses?.map((cancerDiagnose, index) => (
                    <SingleCancerDiagnoseInput key={index} data={cancerDiagnose} onChange={onCancerDiagnoseChangeFactory(index)} forTarget={forTarget} />
                )))}
            {data.hasCancerDiagnosis && <Button onClick={onAddCancerDiagnose}>Add another diagnosis</Button>}

        </Stack>
    );
}

export default CancerDiagnoseInput;