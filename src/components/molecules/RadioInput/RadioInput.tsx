import * as React from 'react';
import { FormControlLabel, Radio, RadioGroup, } from "@mui/material";
import { RadioGroupProps } from "@mui/material/RadioGroup";
import FormControlWrapper from "../FormControlWrapper";

interface RadioInputOption {
    label: string;
    value: string;
}

interface RadioInputOptions extends Array<RadioInputOption> { }

export interface RadioInputProps extends RadioGroupProps {
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
    value: string;
    /**
     * onChange handler
     */
    onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
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

}

const RadioInput = ({ label, options, value, onChange, errorText = "", helperText = "", tooltipText = "", required = false, ...radioGroupProps }: RadioInputProps) => {
    const error = errorText !== "";
    return (
        <FormControlWrapper label={label} tooltipText={tooltipText} required={required} errorText={errorText} helperText={helperText}>
            <RadioGroup value={value} onChange={onChange} {...radioGroupProps}>
                {options.map((option) => (
                    <FormControlLabel
                        key={option.value}
                        value={option.value}
                        control={<Radio sx={{
                            color: error ? "error.main" : "primary.main",
                            "&.Mui-checked": {
                                color: error ? "error.main" : "primary.main",
                            }
                        }} />}
                        label={option.label}
                    />
                ))}
            </RadioGroup>
        </FormControlWrapper>
    );
}

export default RadioInput;