import { Stack } from "@mui/system";
import * as React from "react";
import { useTranslation } from "react-i18next";

import AutocompleteInput from "../../molecules/AutocompleteInput";
import RadioInput from "../../molecules/RadioInput";
import { RadioInputOptions } from "../../molecules/RadioInput/RadioInput";
import geneOptions from "./geneOptions.json";
import { useHtmlId } from "../../hooks/useHtmlId";


export interface IGeneticTestingHistoryData {
    /**
     * Has done genetic testing
     */
    hasDoneGeneticTesting: boolean | null | "unsure";
    /**
     * Found pathogenic mutations
     */
    foundPathogenicMutations: boolean | null | "unsure";
    /**
     * Pathogenic gene mutations
     */
    pathogenicGeneMutations: string[];
}

export interface IGeneticTestingHistoryProps {
    /**
     * Data
     */
    data: IGeneticTestingHistoryData;
    /**
     * onChange handler
     */
    onChange: (data: IGeneticTestingHistoryData) => void;
    /**
     * For target
     */
    forTarget?: boolean;
}

const GeneticTestingHistory = ({ data, onChange, forTarget = false }: IGeneticTestingHistoryProps) => {
    const { t } = useTranslation();

    const doneGeneticTestingLabel = t('geneticTestingHistory.input.hasDoneGeneticTesting.label', {
        subject: forTarget ? t('subject.you') : t('subject.they')
    })


    const handleDoneGeneticTestingChange = (hasDoneGeneticTesting: boolean | null | string) => {
        if (typeof hasDoneGeneticTesting === "string" && !(hasDoneGeneticTesting === "unsure"))
            throw new Error("hasDoneGeneticTesting must be a boolean, null or 'unsure'");
        onChange({
            ...data,
            hasDoneGeneticTesting
        });
    }

    const handleFoundPathogenicMutationsChange = (foundPathogenicMutations: boolean | null | string) => {
        if (typeof foundPathogenicMutations === "string" && !(foundPathogenicMutations === "unsure"))
            throw new Error("foundPathogenicMutations must be a boolean, null or 'unsure'");
        onChange({
            ...data,
            foundPathogenicMutations
        });
    }

    const handleGeneMutationAutocompleteChange = (pathogenicGeneMutations: any) => {
        onChange({
            ...data,
            pathogenicGeneMutations
        });
    }

    const radioInputOptions: RadioInputOptions = [
        { label: t('general.input.options.yes'), value: true },
        { label: t('general.input.options.no'), value: false },
    ]
    if (!forTarget) radioInputOptions.push({ label: t('general.input.options.unsure'), value: "unsure" });

    const id = useHtmlId();

    return (
        <Stack gap={3} >
            <RadioInput label={doneGeneticTestingLabel} value={data.hasDoneGeneticTesting}
                onChange={handleDoneGeneticTestingChange} options={radioInputOptions} row
                id={`${id}-hasDoneGeneticTesting`}
            />
            {data.hasDoneGeneticTesting && data.hasDoneGeneticTesting !== "unsure" && (
                <>
                    <RadioInput label={t('geneticTestingHistory.input.fountPathogenicMutations.label')}
                        value={data.foundPathogenicMutations}
                        onChange={handleFoundPathogenicMutationsChange}
                        options={radioInputOptions} row
                        id={`${id}-foundPathogenicMutations`} />
                    {data.foundPathogenicMutations && data.foundPathogenicMutations !== "unsure" && (
                        <AutocompleteInput label={t('geneticTestingHistory.input.pathogenicGeneMutations.label')}
                            options={geneOptions} value={data.pathogenicGeneMutations}
                            onChange={handleGeneMutationAutocompleteChange}
                            multiple freeSolo id={`${id}-pathogenicGeneMutations`}
                            placeholder={t('general.input.placeholder.chooseFromListOrType')} />
                    )}
                </>
            )
            }
        </Stack >
    )
}

export default GeneticTestingHistory;
