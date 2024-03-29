import * as React from "react";
import FormControlWrapper from "../FormControlWrapper";
import { FormGroup, FormControlLabel, Checkbox } from "@mui/material";
import { useTheme } from "@mui/material";
import { FormFieldProps } from "../FormControlWrapper/FormControlWrapper";

interface CheckboxInputOption {
    label: string;
    value: string;
}
interface CheckboxInputOptions extends Array<CheckboxInputOption> { }

export interface CheckboxInputValues {
    [key: string]: boolean;
}

export interface CheckboxInputProps extends FormFieldProps {
    /**
     * Options for the radio input
     */
    options: CheckboxInputOptions;
    /**
     * The value of the radio input
     */
    value: CheckboxInputValues;
    /**
     * onChange handler
     */
    onChange: (event: CheckboxInputValues) => void;
    /**
     * Display the checkboxes on a row
     */
    row?: boolean;
}

const CheckboxInput = ({ label, options, value, onChange,
    errorText = "", helperText = "", tooltipText = "",
    required = false, row = false }: CheckboxInputProps) => {

    const theme = useTheme();
    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const tmpValue = { ...value };
        tmpValue[event.target.name] = event.target.checked;
        onChange(tmpValue);
    }

    const error = errorText !== "";
    const CheckboxSx: any = {
        "&.Mui-checked": {
            color: error ? "error.main" : "primary.main",
        },
        ":hover": {
            backgroundColor: error ? theme.palette.error.light : theme.palette.hover.light,
        }
    }
    if (error) CheckboxSx["color"] = "error.main";

    return (
        <FormControlWrapper label={label} tooltipText={tooltipText} required={required} errorText={errorText} helperText={helperText}>
            <FormGroup row={row}>
                {options.map((option) => (
                    <FormControlLabel
                        key={option.value}
                        value={option.value}
                        control={<Checkbox checked={value[option.value]}
                            onChange={handleChange} name={option.value}
                            sx={CheckboxSx} />}
                        label={option.label}
                    />
                ))}
            </FormGroup>
        </FormControlWrapper>
    )
}

export default CheckboxInput;