import * as React from "react";
import FormControlWrapper from "../FormControlWrapper";
import { FormGroup, FormControlLabel, Checkbox } from "@mui/material";

interface CheckboxInputOption {
    label: string;
    value: string;
}
interface CheckboxInputOptions extends Array<CheckboxInputOption> { }

export interface CheckboxInputValues {
    [key: string]: boolean;
}

export interface CheckboxInputProps {
    /**
     * The label for the radio input
     */
    label: string;
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
     * Display the checkboxes on a row
     */
    row?: boolean;
}

const CheckboxInput = ({ label, options, value, onChange,
    errorText = "", helperText = "", tooltipText = "",
    required = false, row = false }: CheckboxInputProps) => {

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const tmpValue = { ...value };
        tmpValue[event.target.name] = event.target.checked;
        onChange(tmpValue);
    }

    return (
        <FormControlWrapper label={label} tooltipText={tooltipText} required={required} errorText={errorText} helperText={helperText}>
            <FormGroup row={row}>
                {options.map((option) => (
                    <FormControlLabel
                        key={option.value}
                        value={option.value}
                        control={<Checkbox checked={value[option.value]}
                            onChange={handleChange} name={option.value} />}
                        label={option.label}
                    />
                ))}
            </FormGroup>
        </FormControlWrapper>
    )
}

export default CheckboxInput;