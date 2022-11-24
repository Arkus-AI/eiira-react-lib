import * as React from 'react';
import { FormControlLabel, Radio, RadioGroup, useTheme, } from "@mui/material";
import FormControlWrapper from "../FormControlWrapper";

interface RadioInputOption {
    label: string;
    value: string | boolean;
}

export interface RadioInputOptions extends Array<RadioInputOption> { }

export interface RadioInputProps {
    /**
     * The label for the radio input
     */
    label: string;
    /**
     * Options for the radio input
     */
    options: RadioInputOptions;
    /**
     * The value of the radio input
     */
    value: string | boolean | null;
    /**
     * onChange handler
     */
    onChange: (value: string | boolean | null) => void;
    /**
     * Error message to display
     */
    errorText?: string;
    /**
     * Helper text to display
     */
    helperText?: string;
    /**
     * Tooltip text to display
     */
    tooltipText?: string;
    /**
     * Is required
     */
    required?: boolean;
    /**
     * show on a row
     */
    row?: boolean;
}

const isBoolean = (value: string | boolean): value is boolean => {
    return typeof value === 'boolean';
}

const isBoleanString = (value: string | boolean): value is string => {
    // if value is a string and is either 'true' or 'false' then return true
    return typeof value === 'string' && (value === 'true' || value === 'false');
}

const RadioInput = ({ label, options, value, onChange, errorText = "", helperText = "", tooltipText = "", required = false, row = false }: RadioInputProps) => {
    const theme = useTheme()
    const error = errorText !== "";
    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const val = event.target.value;
        if (isBoleanString(val)) {
            onChange(val === 'true');
        } else {
            onChange(val);
        }
    }
    const RadioSx: any = {
        "&.Mui-checked": {
            color: error ? "error.main" : "primary.main",
        },
        ":hover": {
            color: error ? "error.main" : "primary.main",
            backgroundColor: error ? theme.palette.error.light : theme.palette.hover.light,
        }
    }
    if (error) RadioSx["color"] = "error.main";

    return (
        <FormControlWrapper label={label} tooltipText={tooltipText} required={required} errorText={errorText} helperText={helperText}>
            <RadioGroup value={value} onChange={handleChange} row={row}>
                {options.map((option) => (
                    <FormControlLabel
                        key={isBoolean(option.value) ? option.value.toString() : option.value}
                        value={option.value}
                        control={<Radio sx={RadioSx} />}
                        label={option.label}
                    />
                ))}
            </RadioGroup>
        </FormControlWrapper>
    );
}

export default RadioInput;