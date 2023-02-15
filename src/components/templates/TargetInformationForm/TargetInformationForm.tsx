import * as React from "react";
import {
    Accordion as MuiAccordion,
    AccordionSummary as MuiAccordionSummary,
    AccordionDetails as MuiAccordionDetails,
    Typography, Box
} from "@mui/material";
import { AccordionProps, AccordionSummaryProps } from "@mui/material";
import { styled } from "@mui/system";
import { useTranslation } from "react-i18next";

import Icon from "../../atoms/Icon";
import GeneticTestingHistory, { IGeneticTestingHistoryData } from "../../organisms/GeneticTestingHistory/GeneticTestingHistory";
import CancerDiagnoseInput, { ICancerDiagnoseInputData } from "../../organisms/CancerDiagnoseInput/CancerDignoseInput";
import TargetPersonalDetails, {
    ITargetPersonalDetailsData,
    ITargetPersonalDetailsErrors
} from "../../organisms/TargetPersonalDetails/TargetPersonalDetails";
import ErrorOrHelperText from "../../atoms/ErrorOrHelperText";

const Accordion = styled((props: AccordionProps) => (
    <MuiAccordion disableGutters elevation={0} {...props} />
))(({ theme }) => ({}));

const AccordionSummary = styled((props: AccordionSummaryProps) => (
    <MuiAccordionSummary expandIcon={<Icon iconType="caret-down" color="inherit" fontSize="inherit" />} {...props} />
))(({ theme }) => ({
    borderRadius: "4px",
    border: "none",
    boxSizing: "content-box",
    transition: "border-radius 0.2s ease-in",
    "&.Mui-expanded": {
        transitionTimingFunction: "ease-out",
        borderRadius: "4px 4px 0 0",
    }
}));

const AccordionDetails = styled(MuiAccordionDetails)(({ theme }) => ({
    borderRadius: "0 0 4px 4px",
    border: `1px solid ${theme.palette.neutral.containers}`,
    borderTop: "0px",
}));

interface ITargetData {
    /**
     * Personal details
     */
    personalDetails: ITargetPersonalDetailsData;
    /**
     * Medical history
     */
    medicalHistory: ICancerDiagnoseInputData;
    /**
     * Genetic testing history
     */
    geneticTestingHistory: IGeneticTestingHistoryData;
}

export interface ITargetInformationFormProps {
    data: ITargetData;
    onChange: (data: ITargetData) => void;
    errors: ITargetPersonalDetailsErrors;
    setErrors: (errors: ITargetPersonalDetailsErrors) => void;
    /** 
     * Run validation callback
     */
    runValidation: () => void;
}


const TargetInformationForm = ({ data, onChange, errors, runValidation, setErrors }: ITargetInformationFormProps) => {
    const { t } = useTranslation();
    const { personalDetails, medicalHistory, geneticTestingHistory } = data;


    const [expandedPanel, setExpandedPanel] = React.useState<
        "personal-details" | "medical-history" |
        "genetic-testing-history" | "">("personal-details");

    const [toRunValidation, setToRunValidation] = React.useState<boolean>(false);

    const cleanError = (key: keyof ITargetPersonalDetailsErrors) => {
        const tmpErrors = { ...errors };
        tmpErrors[key] = "";
        setErrors?.(tmpErrors);
    }

    const onChangeFactory = (key: keyof ITargetData) => (value: any) => {

        if (key === 'personalDetails') {
            const sexIsSame = value.sex === data.personalDetails.sex
            const hasAshkenaziJewishBackgroundIsSame = value.hasAshkenaziJewishBackground === data.personalDetails.hasAshkenaziJewishBackground
            const personalNumberIsSame = value.personalNumber === data.personalDetails.personalNumber
            if (sexIsSame && hasAshkenaziJewishBackgroundIsSame && personalNumberIsSame) {
                // Means something else changed, so we run validation
                setToRunValidation(true);
            }
            if(!personalNumberIsSame){
                // If personal number is changing we clean the error
                cleanError('personalNumberError');
            }
        }
        const newData = { ...data, [key]: value };
        onChange(newData);
    }

    const panelChangeHandlerFactory =
        (panel: "personal-details" | "medical-history" | "genetic-testing-history") =>
            (event: React.ChangeEvent<{}>, isExpanded: boolean) => {
                if (isExpanded && panel !== 'personal-details')
                    setToRunValidation(true);
                setExpandedPanel(isExpanded ? panel : "");
            };

    React.useEffect(() => {
        if (toRunValidation) {
            runValidation();
            setToRunValidation(false);
        }
    }, [toRunValidation, setToRunValidation, runValidation])

    /**
     * 1. Validating while the user fills out the form. Would it be possible to check the answer 
     * to Question 1 and/or 2 as soon as the user interacts with any other questions or closes the accordion?
     * 2. When the "Personal details" accordion is closed and answers to Question 1 and/or 2 are 
     * missing, let's show the error text below the accordion
     */

    React.useEffect(() => {
        // Cleaning errors when values are filled
        const tmpErrors = { ...errors };
        if (errors?.sexError !== "" && data.personalDetails.sex !== null) tmpErrors.sexError = "";
        if (errors?.hasAshkenaziJewishBackgroundError !== "" && data.personalDetails.hasAshkenaziJewishBackground !== null)
            tmpErrors.hasAshkenaziJewishBackgroundError = "";
        setErrors?.(tmpErrors);
    }, [data.personalDetails.sex, data.personalDetails.hasAshkenaziJewishBackground])

    React.useEffect(() => {
        const tmpErrors = { ...errors };
        if (errors?.personalNumberError !== "") tmpErrors.personalNumberError = "";
        setErrors?.(tmpErrors);
    }, [data.personalDetails.personalNumber])

    const hasErrors = errors.sexError !== "" || errors.hasAshkenaziJewishBackgroundError !== ""
    const personalDetailsErrorMessage =
        (hasErrors && expandedPanel !== "personal-details") ? t('pedigree.about.error.fixErrorsInPersonalDetails') : "";

    return (
        <Box>
            <Accordion expanded={expandedPanel === 'personal-details'} onChange={panelChangeHandlerFactory('personal-details')}>
                <AccordionSummary > <Typography variant="h4">{t('personalDetails.title')}</Typography> </AccordionSummary>
                <AccordionDetails>
                    <TargetPersonalDetails data={personalDetails} onChange={onChangeFactory('personalDetails')} errors={errors} />
                </AccordionDetails>
            </Accordion>
            <ErrorOrHelperText errorText={personalDetailsErrorMessage} sx={{
                paddingLeft: "24px",
                marginBottom: "8px"
            }} />
            <Accordion expanded={expandedPanel === 'medical-history'} onChange={panelChangeHandlerFactory('medical-history')}>
                <AccordionSummary> <Typography variant="h4">{t('medicalHistory.title')}</Typography> </AccordionSummary>
                <AccordionDetails>
                    <CancerDiagnoseInput data={medicalHistory} onChange={onChangeFactory('medicalHistory')} forTarget />
                </AccordionDetails>
            </Accordion>
            <Accordion expanded={expandedPanel === 'genetic-testing-history'} onChange={panelChangeHandlerFactory('genetic-testing-history')}
                sx={{ marginBottom: 0 }}>
                <AccordionSummary > <Typography variant="h4">{t('geneticTestingHistory.title')}</Typography> </AccordionSummary>
                <AccordionDetails>
                    <GeneticTestingHistory data={geneticTestingHistory} onChange={onChangeFactory('geneticTestingHistory')} forTarget />
                </AccordionDetails>
            </Accordion>
        </Box>
    );
}

export default TargetInformationForm;