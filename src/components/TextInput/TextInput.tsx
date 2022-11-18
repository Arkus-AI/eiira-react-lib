import * as React from 'react';
import { FormControl, FormHelperText, Stack, InputLabel, } from '@mui/material';
import { InputBaseProps, InputBase, } from '@mui/material';
import { styled } from '@mui/material/styles';
import Icon from '../Icon';
import IconWithTooltip from '../IconWithTooltip';

const BootstrapInput = styled(InputBase)(({ theme }) => ({
    '& .MuiInputBase-input': {
        borderRadius: 4,
        position: 'relative',
        border: `1px solid ${theme.palette.neutral.field}`,
        padding: '8px',
        marginTop: theme.spacing(.5),
        transition: theme.transitions.create([
            'border-color',
            'background-color',
            'box-shadow',
        ]),
        '&:hover': {
            borderColor: theme.palette.primary.main,
        },
        '&:focus': {
            boxShadow: `inset 0px 0px 0px 1px ${theme.palette.primary.main}`,
            borderColor: theme.palette.primary.main,
        },
        "&::-webkit-outer-spin-button, &::-webkit-inner-spin-button": {
            "WebkitAppearance": "none",
            margin: 0,
        },
        "&[type=number]": {
            "MozAppearance": "textfield",
        },
    },
    '&.MuiInputBase-root.Mui-error': {
        '& .MuiInputBase-input': {
            borderColor: theme.palette.error.main,
            '&:focus': {
                boxShadow: `inset 0px 0px 0px 1px ${theme.palette.primary.main}`,
                borderColor: theme.palette.primary.main,
            },
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
    errorText?: string;
    /**
     * Tooltip text to display
     */
    tooltipText?: string;
}

export default function TextInput({ label, errorText = "", tooltipText = "", ...props }: TextInputProps) {
    const error = errorText.length > 0;
    const { required } = props;
    const inputLabelProps = {
        disableAnimation: true,
        shrink: true,
        htmlFor: "bootstrap-input",
        sx: {
            position: "relative", transformOrigin: "unset", transform: "unset",
            ".MuiInputLabel-asterisk": {
                color: "error.main",
            }
        }
    }

    return (
        <FormControl variant="standard" error={error} required={required}>
            {tooltipText ? (
                <Stack direction="row" alignItems="center" spacing={1.5}>
                    <InputLabel {...inputLabelProps}> {label} </InputLabel>
                    <IconWithTooltip tooltipText={tooltipText} />
                </Stack>
            ) :
                <InputLabel {...inputLabelProps}> {label} </InputLabel>
            }
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
