import * as React from 'react';
import { FormControl, Stack, InputLabel, } from '@mui/material';
import { InputBaseProps, InputBase } from '@mui/material';
import IconWithTooltip from '../../atoms/IconWithTooltip';
import ErrorOrHelperText from '../../atoms/ErrorOrHelperText';
import { PatternFormat } from 'react-number-format';
import { NumericFormat, InputAttributes } from 'react-number-format';
import { FormFieldProps } from '../FormControlWrapper/FormControlWrapper';


interface CustomProps {
    onChange: (event: { target: { name: string; value: string } }) => void;
    name: string;
}

const YearFormat = React.forwardRef<
    typeof PatternFormat<InputAttributes>,
    CustomProps
>(function NumberFormatCustom(props, ref) {
    const { onChange, ...other } = props;

    return (
        <PatternFormat
            {...other}
            getInputRef={ref}
            onValueChange={(values) => {
                onChange({
                    target: {
                        name: props.name,
                        value: values.value,
                    },
                });
            }}
            format="####"
            mask="Y"
        />
    );
});

const AgeFormat = React.forwardRef<
    typeof NumericFormat<InputAttributes>,
    CustomProps
>(function NumberFormatCustom(props, ref) {
    const { onChange, ...other } = props;

    return (
        <NumericFormat
            {...other}
            getInputRef={ref}
            onValueChange={(values) => {
                onChange({
                    target: {
                        name: props.name,
                        value: values.value,
                    },
                });
            }}
            isAllowed={(values) => {
                const { value } = values;
                return Number(value) < 200;
            }}
        />
    );
});

export const UIntFormat = React.forwardRef<
    typeof NumericFormat<InputAttributes>,
    CustomProps
>(function NumberFormatCustom(props, ref) {
    const { onChange, ...other } = props;
    return <NumericFormat
        {...other}
        getInputRef={ref}
        onValueChange={(values) => {
            onChange({ target: { name: props.name, value: values.value, }, });
        }}
    />
});

const FORMATS = {
    year: YearFormat as any,
    age: AgeFormat as any,
    uint: UIntFormat as any,
    default: 'input',
}

export interface TextInputProps extends FormFieldProps {
    onChange: (value: string) => void;
    /**
     * Value
     */
    value: string | number | null;
    /**
     * Format
     */
    format?: 'year' | 'age' | 'uint' | 'default';
    /**
     * placeholder
     */
    placeholder?: string;
    /**
     * input id
     */
    id?: string;
}

export default function TextInput({ label, errorText = "", tooltipText = "",
    helperText = "", onChange, value, required, format = "default",
    placeholder = "", id = "" }: TextInputProps) {
    const error = errorText.length > 0;
    const inputLabelProps = {
        disableAnimation: true,
        shrink: true,
        focused: false,
        error: false,
        htmlFor: id,
        sx: {
            position: "relative", transformOrigin: "unset", transform: "unset",
            ".MuiInputLabel-asterisk": {
                color: "error.main",
            }
        }
    }

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        onChange(event.target.value);
    }

    const inputProps: InputBaseProps = {
        id,
        value, onChange: handleChange, placeholder,
        inputComponent: FORMATS[format]
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
            <InputBase {...inputProps} />
            <ErrorOrHelperText errorText={errorText} helperText={helperText} />
        </FormControl>
    )
}
