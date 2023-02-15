import * as React from 'react';
import { FormControl, Stack, InputLabel, } from '@mui/material';
import { InputBaseProps, InputBase } from '@mui/material';
import IconWithTooltip from '../../atoms/IconWithTooltip';
import ErrorOrHelperText from '../../atoms/ErrorOrHelperText';
import { PatternFormat } from 'react-number-format';
import { NumericFormat, InputAttributes } from 'react-number-format';
import { FormFieldProps } from '../FormControlWrapper/FormControlWrapper';


interface CustomProps {
    onChange: (event: { target: { name: string; value: string, formattedValue?: string } }) => void;
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
                        formattedValue: values.formattedValue
                    },
                });
            }}
            allowEmptyFormatting
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
                        formattedValue: values.formattedValue
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

const PersonalNumberFormat = React.forwardRef<
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
                        formattedValue: values.formattedValue
                    },
                });
            }}
            allowEmptyFormatting
            format="########-####"
            mask={["Y", "Y", "Y", "Y", "M", "M", "D", "D", "X", "X", "X", "X"]}
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
    personalNumber: PersonalNumberFormat as any,
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
    format?: 'year' | 'age' | 'uint' | 'personalNumber' | 'default';
    /**
     * placeholder
     */
    placeholder?: string;
    /**
     * input id
     */
    id?: string;
    /**
     * Name of the field
     */
    name?: string;
}

export default function TextInput({ label, errorText = "", tooltipText = "",
    helperText = "", onChange, value, required, format = "default",
    placeholder = "", id = "", name = "" }: TextInputProps) {

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

    const [internalValue, setInternalValue] = React.useState(value);
    React.useEffect(() => {
        if (value === "")
            setInternalValue("");
    }, [value])


    const handleChange = (event: any) => {
        onChange(event.target.value);
        if (event.target.formattedValue) {
            setInternalValue(event.target.formattedValue);
        } else {
            setInternalValue(event.target.value);
        }
    }


    const inputProps: InputBaseProps = {
        id,
        value: internalValue, onChange: handleChange, placeholder,
        inputComponent: FORMATS[format],
        name,
        onBlur: (event) => {
            const validationEvent = new CustomEvent('validation', {
                detail: {
                    name: event.target.name,
                    value: event.target.value,
                }
            });
            window.dispatchEvent(validationEvent);
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
            <InputBase {...inputProps} />
            <ErrorOrHelperText errorText={errorText} helperText={helperText} name={name} />
        </FormControl>
    )
}
