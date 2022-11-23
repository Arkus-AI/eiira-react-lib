import * as React from "react";
import { Autocomplete, TextField } from "@mui/material";
import { styled } from '@mui/material/styles';

import FormControlWrapper from "../FormControlWrapper";
import { FormFieldProps } from "../FormControlWrapper/FormControlWrapper";


export interface IAutocompleteInputProps extends FormFieldProps {
    /**
     * Label
     */
    label: string;
    /**
     * Options
     */
    options: string[];
    /**
     * Value
     */
    value: any;
    /**
     * onChange handler
     */
    onChange: (value: string | null) => void;
    /**
     * Placeholder
     */
    placeholder?: string;
    /**
     * multiple input
     */
    multiple?: boolean;
    /**
     * freeSolo input
     */
    freeSolo?: boolean;
}

const AutocompleteInput = (props: IAutocompleteInputProps) => {
    const { label, tooltipText, errorText, helperText, required, onChange, options, value, placeholder, ...rest } = props;

    const autocompleteProps: any = {
        options,
        renderInput: (params: any) => <TextField {...params} placeholder={placeholder} />,
        ...rest
    }

    if (!props.multiple && props.freeSolo) {
        autocompleteProps.onInputChange = (_: any, value: any) => {
            onChange(value);
        }
        autocompleteProps.inputValue = value || ""
    } else {
        autocompleteProps.onChange = (_: any, value: any) => {
            onChange(value);
        }
        autocompleteProps.value = value || []
    }

    return (<FormControlWrapper {...{
        label, tooltipText, errorText,
        helperText, required
    }} >
        <Autocomplete {...autocompleteProps} />
    </FormControlWrapper>
    );
}

export default AutocompleteInput;
