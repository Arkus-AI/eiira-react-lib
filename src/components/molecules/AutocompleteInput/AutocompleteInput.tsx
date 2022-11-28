import * as React from "react";
import { Autocomplete, Chip, TextField } from "@mui/material";

import FormControlWrapper from "../FormControlWrapper";
import { FormFieldProps } from "../FormControlWrapper/FormControlWrapper";
import Icon from "../../atoms/Icon";


export interface IAutocompleteInputProps extends FormFieldProps {
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
    onChange: (value: string | null | string[]) => void;
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
        clearIcon: <Icon iconType="xmark" fontSize="inherit" />,
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
    if (props.multiple)
        autocompleteProps.renderTags = (value: readonly string[], getTagProps: any) =>
            value.map((option, index) => (
                <Chip variant="outlined" label={option} clickable={false} {...getTagProps({ index })}
                    sx={{ ":hover": { backgroundColor: "unset", } }}
                    deleteIcon={<Icon iconType="circle-xmark" fontSize="inherit" />} />
            ));

    return (<FormControlWrapper {...{
        label, tooltipText, errorText,
        helperText, required
    }} >
        <Autocomplete {...autocompleteProps} />
    </FormControlWrapper>
    );
}

export default AutocompleteInput;
