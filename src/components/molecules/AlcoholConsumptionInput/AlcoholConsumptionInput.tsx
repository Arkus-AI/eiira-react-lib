import * as React from "react";
import { InputBase, FormControlLabel, FormGroup, FormLabel } from "@mui/material";
import { Stack } from "@mui/system";
import { styled } from '@mui/material/styles';
import { UIntFormat } from "../TextInput/TextInput";
import { useHtmlId } from "../../hooks/useHtmlId";
import { useTranslation } from "react-i18next";


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

function AlcoholConsumptionLine({ name, value, onChange, id }:
    { name: string, value: string, onChange: (value: string) => void, id: string }) {
    const { t } = useTranslation();
    return <StyledFormControlLabelForTextField label={t(`personalDetails.input.alcoholConsumption.options.${name}.label`)} control={
        <InputBase
            value={value}
            onChange={(e) => onChange(e.target.value)}
            sx={{ width: "44px" }}
            inputComponent={UIntFormat as any}
            id={id}
        />}
    />
}

function AlcoholConsumptionInput({
    data,
    onChange,
    label
}: IAlcoholConsumptionInputProps) {
    const id = useHtmlId();
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
                            onChange={(value) => onChange({ ...data, [key]: value.length ? parseInt(value) : 0 })}
                            id={`${id}-${key}`}
                        />
                    })}
                </Stack>
            </FormGroup>
        </div>
    );
}

export default AlcoholConsumptionInput;