import * as React from "react";
import { InputBase, FormControlLabel, FormGroup, FormLabel } from "@mui/material";
import { Stack } from "@mui/system";
import { styled } from '@mui/material/styles';
import { UIntFormat } from "../TextInput/TextInput";


export interface IAlcoholConsumptionData {
    /**
     * number of glasses of wine (150ml)
     * @minimum 0
     * @default 0
     */
    wine: number;
    /**
     * number of bottles of beer (330ml)
     * @minimum 0
     * @default 0
     */
    beer: number;
    /**
     * number of cans of alcopop drinks (275ml)
     * @minimum 0
     * @default 0
     */
    alcopop: number;
    /**
     * number of shots of spirits (25ml)
     * @minimum 0
     * @default 0
     */
    shotOfSpirit: number;
}

export interface IAlcoholConsumptionInputProps {
    /**
     * Alcohol consumption obj
     */
    data: IAlcoholConsumptionData;
    /**
     * onChange handler
     */
    onChange: (data: IAlcoholConsumptionData) => void;
    /**
     * Label
     */
    label: string;
}

// TODO: this needs translation
const LABEL_DICT: { [key: string]: string; } = {
    "wine": "glasses of wine (150ml)",
    "beer": "bottles of beer (330ml)",
    "alcopop": "cans of alcopop drinks (275ml)",
    "shotOfSpirit": "shots of spirits (25ml)"
}

const StyledFormControlLabelForTextField = styled(FormControlLabel)(() => ({
    marginLeft: 0,
    '& .MuiFormControlLabel-label': {
        marginLeft: 20,
    },
    '.MuiTextField-root': {
        width: 44,
        input: {
            textAlign: 'center'
        }
    }
}))

function AlcoholConsumptionLine({ name, value, onChange }: { name: string, value: string, onChange: (value: string) => void }) {
    return <StyledFormControlLabelForTextField label={LABEL_DICT[name]} control={
        <InputBase
            value={value}
            onChange={(e) => onChange(e.target.value)}
            sx={{ width: "44px" }}
            inputComponent={UIntFormat as any}
        />}
    />
}

function AlcoholConsumptionInput({
    data,
    onChange,
    label
}: IAlcoholConsumptionInputProps) {
    return (
        <div>
            <FormLabel>{label}</FormLabel>
            <FormGroup>
                <Stack gap={1.5} mt="12px">
                    {Object.keys(data).map((key) => {
                        const value = data[key as keyof IAlcoholConsumptionData];
                        return <AlcoholConsumptionLine
                            key={key}
                            name={key}
                            value={value.toString()}
                            onChange={(value) => onChange({ ...data, [key]: value.length ? parseInt(value) : 0 })} />
                    })}
                </Stack>
            </FormGroup>
        </div>
    );
}

export default AlcoholConsumptionInput;