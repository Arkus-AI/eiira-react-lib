import * as React from 'react';
import { FormControl, Stack, FormLabel, FormLabelProps } from '@mui/material';
import IconWithTooltip from '../../atoms/IconWithTooltip';
import ErrorOrHelperText from '../../atoms/ErrorOrHelperText';

export interface FormFieldProps {
    /**
     * The label for form control
     */
    label: string;
    /**
     * Tooltip text to display
     */
    tooltipText?: string;
    /**
     * Error message to display
     */
    errorText?: string;
    /**
     * Helper text to display
     */
    helperText?: string;
    /**
     * Is required
     */
    required?: boolean;
    /**
     * Form label props
     */
    formLabelProps?: FormLabelProps;
}

export interface FormControlWrapperProps extends FormFieldProps {
    /**
     * Children to render inside the wrapper
     */
    children: React.ReactNode;
}

const FormControlWrapper = ({ children, label, tooltipText = "",
    required = false, errorText = "", helperText = "",
    formLabelProps = {} }: FormControlWrapperProps) => {
    const error = errorText !== "";
    formLabelProps = {
        ...formLabelProps,
        focused: false,
        error: false,
    }

    return (
        <FormControl required={required} error={error}>
            {tooltipText ? (
                <Stack direction="row" alignItems="center" spacing={1.5}>
                    <FormLabel {...formLabelProps}>{label}</FormLabel>
                    <IconWithTooltip tooltipText={tooltipText} />
                </Stack>
            ) :
                <FormLabel {...formLabelProps}>{label}</FormLabel>
            }
            {children}
            <ErrorOrHelperText errorText={errorText} helperText={helperText} />
        </FormControl>
    )
}

export default FormControlWrapper;