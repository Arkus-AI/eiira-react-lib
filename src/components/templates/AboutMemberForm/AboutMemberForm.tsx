import * as React from "react";
import {
    Accordion as MuiAccordion,
    AccordionSummary as MuiAccordionSummary,
    AccordionDetails,
    Typography, Box
} from "@mui/material";
import { AccordionProps, AccordionSummaryProps } from "@mui/material";
import { styled } from "@mui/system";
import { useTranslation } from "react-i18next";

import Icon from "../../atoms/Icon";
import RelativesPersonalDetails,
{ IRelativesPersonalDetailsData, IRelativesPersonalDetailsErrors }
    from "../../organisms/RelativesPersonalDetails/RelativesPersonalDetails";
import GeneticTestingHistory, { IGeneticTestingHistoryData } from "../../organisms/GeneticTestingHistory/GeneticTestingHistory";
import CancerDiagnoseInput, { ICancerDiagnoseInputData } from "../../organisms/CancerDiagnoseInput/CancerDignoseInput";
import ErrorOrHelperText from "../../atoms/ErrorOrHelperText";

const Accordion = styled((props: AccordionProps) => (
    <MuiAccordion disableGutters elevation={0} square {...props} />
))(({ theme }) => ({}));

const AccordionSummary = styled((props: AccordionSummaryProps) => (
    <MuiAccordionSummary expandIcon={<Icon iconType="caret-down" color="inherit" fontSize="inherit" />} {...props} />
))(({ theme }) => ({}))

interface IMemberData {
    /**
     * Personal details
     */
    personalDetails: IRelativesPersonalDetailsData;
    /**
     * Medical history
     */
    medicalHistory: ICancerDiagnoseInputData;
    /**
     * Genetic testing history
     */
    geneticTestingHistory: IGeneticTestingHistoryData;
}

export interface IAboutMemberFormProps {
    /**
     * Member data
     */
    data: IMemberData;
    /** 
     * onChange handler
     */
    onChange: (data: IMemberData) => void;
    /**
     * set has error
     */
    setHasError?: (hasError: boolean) => void;
}

const yearInFuture = (year: string) => {
    const currentYear = new Date().getFullYear();
    return year.length === 4 && parseInt(year) > currentYear;
}

const yearOfBirthAfterYearOfDeath = (yearOfBirth: string, yearOfDeath: string) => {
    return yearOfBirth.length === 4 && yearOfDeath.length === 4 && parseInt(yearOfBirth) > parseInt(yearOfDeath);
}


const errorsObjHasError = (errors: IRelativesPersonalDetailsErrors) => {
    return Object.values(errors).some(error => error !== "");
}

const MemoizedBox = React.memo(Box);
const MemoizedAccordion = React.memo(Accordion);
const MemoizedAccordionSummary = React.memo(AccordionSummary);
const MemoizedAccordionDetails = React.memo(AccordionDetails);

const MemoizedRelativesPersonalDetails = React.memo(RelativesPersonalDetails);
const MemoizedCancerDiagnoseInput = React.memo(CancerDiagnoseInput);
const MemoizedGeneticTestingHistory = React.memo(GeneticTestingHistory);


const AboutMemberForm = ({ data, onChange, setHasError }: IAboutMemberFormProps) => {
    const { t } = useTranslation();

    const getValidationErrorMessages = (data: IRelativesPersonalDetailsData): IRelativesPersonalDetailsErrors => {
        const { yearOfBirth, yearOfDeath, ageAtDeath } = data
        let yearOfBirthError: string, yearOfDeathError: string,
            ageAtDeathError: string = "";

        if (yearOfBirth.length === 4 && yearOfDeath.length === 4 &&
            ageAtDeath.length !== 0) {
            if (Math.abs(parseInt(yearOfBirth) + parseInt(ageAtDeath) - parseInt(yearOfDeath)) > 1) {
                ageAtDeathError =t('about.error.notConsistent');
            }
        }
        yearOfBirthError = yearInFuture(yearOfBirth) ? t('about.error.notInFuture'): "";
        yearOfDeathError = yearInFuture(yearOfDeath) ? t('about.error.notInFuture'): "";
        if (yearOfBirthAfterYearOfDeath(yearOfBirth, yearOfDeath))
            yearOfDeathError =t('about.error.mustBeAfterBirth');
        return { yearOfBirthError, yearOfDeathError, ageAtDeathError };
    }

    const [personDetailErrors, setPersonDetailErrors] =
        React.useState(getValidationErrorMessages(data.personalDetails));
    const [personalDetailsErrorMessage, setPersonalDetailsErrorMessage] = React.useState<any>("");

    const [expandedPanel, setExpandedPanel] = React.useState<
        "personal-details" | "medical-history" |
        "genetic-testing-history" | "">("");

    React.useEffect(() => {
        const errors = getValidationErrorMessages(data.personalDetails)
        const hasError = errorsObjHasError(errors)
        if (hasError && expandedPanel !== "personal-details") {
            setPersonalDetailsErrorMessage(t('about.error.fixErrorsInPersonalDetails'));
        } else {
            setPersonalDetailsErrorMessage("");
        }
        setHasError !== undefined && setHasError(hasError);
        setPersonDetailErrors(errors)
    }, [data.personalDetails, expandedPanel]);


    const panelChangeHandlerFactory =
        (panel: "personal-details" | "medical-history" | "genetic-testing-history") =>
            React.useCallback((event: React.ChangeEvent<{}>, isExpanded: boolean) => {
                setExpandedPanel(isExpanded ? panel : "");
            }, [panel]);

    const handlePersonalDetailsChange = React.useCallback(
        (personalDetails: IRelativesPersonalDetailsData) => onChange({ ...data, personalDetails }),
        [data, onChange]);

    const handleMedicalHistoryChange = React.useCallback((medicalHistory: ICancerDiagnoseInputData) => onChange({ ...data, medicalHistory }),
        [data, onChange]);

    const handleGeneticTestingHistoryChange = React.useCallback(
        (geneticTestingHistory: IGeneticTestingHistoryData) => onChange({ ...data, geneticTestingHistory }),
        [data, onChange]);


    return (
        <MemoizedBox>
            <MemoizedAccordion expanded={expandedPanel === 'personal-details'} onChange={panelChangeHandlerFactory('personal-details')}>
                <MemoizedAccordionSummary > <Typography variant="h4">{t('about.personalDetails.title')}</Typography> </MemoizedAccordionSummary>
                <MemoizedAccordionDetails>
                    <MemoizedRelativesPersonalDetails
                        data={data.personalDetails}
                        onChange={handlePersonalDetailsChange}
                        errors={personDetailErrors} />
                </MemoizedAccordionDetails>
            </MemoizedAccordion>
            <ErrorOrHelperText errorText={personalDetailsErrorMessage} sx={{
                paddingLeft: "24px",
                marginBottom: "8px"
            }} />
            <MemoizedAccordion expanded={expandedPanel === 'medical-history'} onChange={panelChangeHandlerFactory('medical-history')}>
                <MemoizedAccordionSummary> <Typography variant="h4">{t('about.medicalHistory.title')}</Typography> </MemoizedAccordionSummary>
                <MemoizedAccordionDetails>
                    <MemoizedCancerDiagnoseInput data={data.medicalHistory} onChange={handleMedicalHistoryChange} />
                </MemoizedAccordionDetails>
            </MemoizedAccordion>
            <MemoizedAccordion expanded={expandedPanel === 'genetic-testing-history'} onChange={panelChangeHandlerFactory('genetic-testing-history')}>
                <MemoizedAccordionSummary > <Typography variant="h4">{t('about.geneticTestingHistory.title')}</Typography> </MemoizedAccordionSummary>
                <MemoizedAccordionDetails>
                    <MemoizedGeneticTestingHistory data={data.geneticTestingHistory} onChange={handleGeneticTestingHistoryChange} />
                </MemoizedAccordionDetails>
            </MemoizedAccordion>
        </MemoizedBox>
    )
}

export default AboutMemberForm;
