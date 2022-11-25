import * as React from "react";
import {
    Accordion as MuiAccordion,
    AccordionSummary as MuiAccordionSummary,
    AccordionDetails,
    Typography, Box
} from "@mui/material";
import { AccordionProps, AccordionSummaryProps } from "@mui/material";
import { styled } from "@mui/system";

import Icon from "../../atoms/Icon";
import RelativesPersonalDetails,
{ IRelativesPersonalDetailsData, IRelativesPersonalDetailsErrors }
    from "../RelativesPersonalDetails/RelativesPersonalDetails";
import GeneticTestingHistory, { IGeneticTestingHistoryData } from "../GeneticTestingHistory/GeneticTestingHistory";
import CancerDiagnoseInput, { ICancerDiagnoseInputData } from "../CancerDiagnoseInput/CancerDignoseInput";
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

const getValidationErrorMessages = (data: IRelativesPersonalDetailsData): IRelativesPersonalDetailsErrors => {
    const { yearOfBirth, yearOfDeath } = data
    let yearOfBirthError: string, yearOfDeathError: string;
    yearOfBirthError = yearInFuture(yearOfBirth) ? "Cannot be in the future" : "";
    yearOfDeathError = yearInFuture(yearOfDeath) ? "Cannot be in the future" : "";
    if (yearOfBirthAfterYearOfDeath(yearOfBirth, yearOfDeath))
        yearOfDeathError = "Must be after birth";
    return { yearOfBirthError, yearOfDeathError };
}

const errorsObjHasError = (errors: IRelativesPersonalDetailsErrors) => {
    return Object.values(errors).some(error => error !== "");
}

const AboutMemberForm = ({ data, onChange, setHasError }: IAboutMemberFormProps) => {
    const [personDetailErrors, setPersonDetailErrors] =
        React.useState(getValidationErrorMessages(data.personalDetails));
    const [personalDetailsErrorMessage, setPersonalDetailsErrorMessage] = React.useState("");

    const [expandedPanel, setExpandedPanel] = React.useState<
        "personal-details" | "medical-history" |
        "genetic-testing-history" | "">("");

    React.useEffect(() => {
        const errors = getValidationErrorMessages(data.personalDetails)
        const hasError = errorsObjHasError(errors)
        if (hasError && expandedPanel !== "personal-details") {
            setPersonalDetailsErrorMessage("Please fix errors in Personal details");
        } else {
            setPersonalDetailsErrorMessage("");
        }
        setHasError !== undefined && setHasError(hasError);
        setPersonDetailErrors(errors)
    }, [data.personalDetails, expandedPanel]);


    const panelChangeHandlerFactory =
        (panel: "personal-details" | "medical-history" | "genetic-testing-history") =>
            (event: React.ChangeEvent<{}>, isExpanded: boolean) => {
                setExpandedPanel(isExpanded ? panel : "");
            };

    const handlePersonalDetailsChange = (personalDetails: IRelativesPersonalDetailsData) => onChange({ ...data, personalDetails });

    const handleMedicalHistoryChange = (medicalHistory: ICancerDiagnoseInputData) => onChange({ ...data, medicalHistory });

    const handleGeneticTestingHistoryChange = (geneticTestingHistory: IGeneticTestingHistoryData) => onChange({ ...data, geneticTestingHistory });


    return (
        <Box>
            <Accordion expanded={expandedPanel === 'personal-details'} onChange={panelChangeHandlerFactory('personal-details')}>
                <AccordionSummary > <Typography variant="h4">Personal details</Typography> </AccordionSummary>
                <AccordionDetails>
                    <RelativesPersonalDetails data={data.personalDetails} onChange={handlePersonalDetailsChange}
                        errors={personDetailErrors} />
                </AccordionDetails>
            </Accordion>
            <ErrorOrHelperText errorText={personalDetailsErrorMessage} sx={{
                paddingLeft: "24px",
                marginBottom: "8px"

            }} />
            <Accordion expanded={expandedPanel === 'medical-history'} onChange={panelChangeHandlerFactory('medical-history')}>
                <AccordionSummary> <Typography variant="h4">Medical history</Typography> </AccordionSummary>
                <AccordionDetails>
                    <CancerDiagnoseInput data={data.medicalHistory} onChange={handleMedicalHistoryChange} />
                </AccordionDetails>
            </Accordion>
            <Accordion expanded={expandedPanel === 'genetic-testing-history'} onChange={panelChangeHandlerFactory('genetic-testing-history')}>
                <AccordionSummary > <Typography variant="h4">Genetic testing history</Typography> </AccordionSummary>
                <AccordionDetails>
                    <GeneticTestingHistory data={data.geneticTestingHistory} onChange={handleGeneticTestingHistoryChange} />
                </AccordionDetails>
            </Accordion>

        </Box>
    )
}

export default AboutMemberForm;
