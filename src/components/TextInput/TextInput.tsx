import * as React from 'react';
import { FormControl, FormHelperText, FormControlLabel, InputLabel } from '@mui/material';
import { InputBaseProps, InputBase, } from '@mui/material';
import { styled, alpha } from '@mui/material/styles';
import Icon from '../Icon';
import { ThemeContext } from '@emotion/react';

const BootstrapInput = styled(InputBase)(({ theme }) => ({
    'label + &': {
        marginTop: theme.spacing(3),
    },
    '& .MuiInputBase-input': {
        borderRadius: 4,
        position: 'relative',
        backgroundColor: theme.palette.mode === 'light' ? '#fcfcfb' : '#2b2b2b',
        border: `1px solid ${theme.palette.neutral.field}`,
        width: 'auto',
        padding: '10px 12px',
        transition: theme.transitions.create([
            'border-color',
            'border-width',
            'background-color',
        ]),
        '&:hover': {
            borderColor: theme.palette.primary.main,
        },
        '&:focus': {
            borderWidth: "2px",
            borderColor: theme.palette.primary.main,
        },
    },
    '&.MuiInputBase-root.Mui-error': {
        '& .MuiInputBase-input': {
            borderColor: theme.palette.error.main,
        }
    }
}));

export interface TextInputProps extends InputBaseProps {
    /**
     * Label to display
     */
    label: string;
    /**
     * Error message to display
     */
    errorText: string;
}

export default function TextInput({ label, errorText, ...props }: TextInputProps) {
    const error = errorText.length > 0;
    return (
        <FormControl variant="standard" error={error}>
            <InputLabel shrink htmlFor="bootstrap-input">
                {label}
            </InputLabel>
            <BootstrapInput id="bootstrap-input" {...props} />
            <FormHelperText error={error} color="error">
                {error && (<>
                    <Icon iconType="exclamation-triangle" color="inherit" fontSize='inherit' sx={{ transform: "translateY(1px)", marginRight: .5 }} />
                    {errorText}
                </>)}
            </FormHelperText>
        </FormControl>
    )
}
