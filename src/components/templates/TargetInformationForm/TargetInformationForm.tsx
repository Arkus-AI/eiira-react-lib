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
    errors?: ITargetPersonalDetailsErrors;
    setErrors?: (error: ITargetPersonalDetailsErrors) => void;
}

const TargetInformationForm = ({ data, onChange, errors, setErrors }: ITargetInformationFormProps) => {
    const { personalDetails, medicalHistory, geneticTestingHistory } = data;

    const onPersonalDetailsChangeHandler = (personalDetailsData: ITargetPersonalDetailsData) =>
        onChange({ ...data, personalDetails: personalDetailsData });

    const onMedicalHistoryChangeHandler = (cancerInputData: ICancerDiagnoseInputData) =>
        onChange({ ...data, medicalHistory: cancerInputData });

    const onGeneticTestingHistoryChangeHandler = (geneticTestingData: IGeneticTestingHistoryData) =>
        onChange({ ...data, geneticTestingHistory: geneticTestingData });

    const { t } = useTranslation();

    const [expandedPanel, setExpandedPanel] = React.useState<
        "personal-details" | "medical-history" |
        "genetic-testing-history" | "">("");

    const panelChangeHandlerFactory =
        (panel: "personal-details" | "medical-history" | "genetic-testing-history") =>
            (event: React.ChangeEvent<{}>, isExpanded: boolean) => {
                setExpandedPanel(isExpanded ? panel : "");
            };

    React.useEffect(() => {
        const tmpErrors = { ...errors };
        if (errors?.sexError !== "" && data.personalDetails.sex !== null) tmpErrors.sexError = "";
        if (errors?.hasAshkenaziJewishBackgroundError !== "" && data.personalDetails.hasAshkenaziJewishBackground !== null)
            tmpErrors.hasAshkenaziJewishBackgroundError = "";
        setErrors?.(tmpErrors);
    }, [data.personalDetails.sex, data.personalDetails.hasAshkenaziJewishBackground])

    return (
        <Box>
            <Accordion expanded={expandedPanel === 'personal-details'} onChange={panelChangeHandlerFactory('personal-details')}>
                <AccordionSummary > <Typography variant="h4">{t("Personal details")}</Typography> </AccordionSummary>
                <AccordionDetails>
                    <TargetPersonalDetails data={personalDetails} onChange={onPersonalDetailsChangeHandler} errors={errors} />
                </AccordionDetails>
            </Accordion>
            <Accordion expanded={expandedPanel === 'medical-history'} onChange={panelChangeHandlerFactory('medical-history')}>
                <AccordionSummary> <Typography variant="h4">{t("Medical history")}</Typography> </AccordionSummary>
                <AccordionDetails>
                    <CancerDiagnoseInput data={medicalHistory} onChange={onMedicalHistoryChangeHandler} forTarget />
                </AccordionDetails>
            </Accordion>
            <Accordion expanded={expandedPanel === 'genetic-testing-history'} onChange={panelChangeHandlerFactory('genetic-testing-history')}>
                <AccordionSummary > <Typography variant="h4">{t("Genetic testing history")}</Typography> </AccordionSummary>
                <AccordionDetails>
                    <GeneticTestingHistory data={geneticTestingHistory} onChange={onGeneticTestingHistoryChangeHandler} forTarget />
                </AccordionDetails>
            </Accordion>
        </Box>
    );
}

export default TargetInformationForm;