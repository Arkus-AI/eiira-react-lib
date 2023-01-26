import { Stack } from "@mui/system";
import * as React from "react";
import { InputBase, FormControlLabel } from "@mui/material";
import { UIntFormat } from "../TextInput/TextInput";
import { useTranslation } from "react-i18next";

export interface INumberOfRelatives {
    brothers: number;
    sisters: number;
    sons: number;
    daughters: number;
    maternalUncles: number;
    maternalAunts: number;
    paternalUncles: number;
    paternalAunts: number;
}

export interface INumberOfRelativesInputProps {
    numberOfRelatives: INumberOfRelatives
    onChange: (numberOfRelatives: INumberOfRelatives) => void;
}

interface ISingleLineNumberOfRelativesInputProps {
    relativeKey: keyof INumberOfRelatives;
    relativeCount: number;
    onChange: (relativeCount: number) => void;
}

const SingleLineNumberOfRelativesInput: React.FC<ISingleLineNumberOfRelativesInputProps> = ({ relativeKey, relativeCount, onChange }) => {
    const { t } = useTranslation();
    return <FormControlLabel label={t(`memberCount.biologicalRelativesoptions.${relativeKey}`)}
        sx={{ marginLeft: 0, marginRight: 0, gap: "12px" }}
        control={
            <InputBase
                value={relativeCount}
                onChange={(e) => onChange(parseInt(e.target.value))}
                sx={{
                    width: "44px", marginTop: "0px",
                    "input": {
                        minWidth: "26px"
                    }
                }}
                inputComponent={UIntFormat as any}
            />}
    />
}


const NumberOfRelativesInput = ({ numberOfRelatives, onChange }: INumberOfRelativesInputProps) => {
    const onChangeFactory = (relativeKey: keyof INumberOfRelatives) => (relativeCount: number) => {
        onChange({ ...numberOfRelatives, [relativeKey]: relativeCount })
    }
    return (
        <Stack spacing={1.5} direction="column">
            {Object.keys(numberOfRelatives).map((key) => {
                return (<SingleLineNumberOfRelativesInput key={key}
                    relativeKey={key as keyof INumberOfRelatives}
                    relativeCount={numberOfRelatives[key as keyof INumberOfRelatives]}
                    onChange={onChangeFactory(key as keyof INumberOfRelatives)} />)
            })}
        </Stack>
    )
}
export default NumberOfRelativesInput;