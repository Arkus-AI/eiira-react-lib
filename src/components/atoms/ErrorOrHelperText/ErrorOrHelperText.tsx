import * as React from 'react';
import { FormHelperText } from '@mui/material';
import Icon from '../Icon';

export interface ErrorOrHelperTextProps {
    /**
     * The error text to display
     */
    errorText?: string;
    /**
     * The helper text to display
     */
    helperText?: string;
    /**
     * Styles object
     */
    sx?: any;
}

const ErrorOrHelperText = ({ errorText = "", helperText = "", sx = {} }: ErrorOrHelperTextProps) => {
    const error = errorText !== "";
    if (errorText === "" && helperText === "") return null;
    return (
        <FormHelperText error={error}
            sx={{
                margin: 0,
                marginTop: "5px",
                ...sx
            }}
        >
            {error ? (<>
                <Icon iconType="exclamation-triangle" color="inherit" fontSize='inherit' sx={{ transform: "translateY(1px)", marginRight: .5 }} />
                {errorText}
            </>) : helperText.length > 0 ? helperText : null}
        </FormHelperText>
    )
}

export default ErrorOrHelperText;

