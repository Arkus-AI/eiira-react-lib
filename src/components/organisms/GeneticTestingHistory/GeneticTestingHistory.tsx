import { Stack } from "@mui/system";
import * as React from "react";

import AutocompleteInput from "../../molecules/AutocompleteInput";
import RadioInput from "../../molecules/RadioInput";
import { RadioInputOptions } from "../../molecules/RadioInput/RadioInput";
import geneOptions from "./geneOptions.json";
import { useId } from "../../hooks/useId";


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
    const doneGeneticTestingLabel = forTarget ?
        "Have you ever done health-related genetic tests?" :
        "Have they ever done health-related genetic tests?";


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
        { label: "Yes", value: true },
        { label: "No", value: false },
    ]
    if (!forTarget) radioInputOptions.push({ label: "Not sure", value: "unsure" });

    const id = useId();

    return (
        <Stack gap={3}>
            <RadioInput label={doneGeneticTestingLabel} value={data.hasDoneGeneticTesting}
                onChange={handleDoneGeneticTestingChange} options={radioInputOptions} row
                id={`${id}-hasDoneGeneticTesting`}
            />
            {data.hasDoneGeneticTesting && data.hasDoneGeneticTesting !== "unsure" && (
                <>
                    <RadioInput label="Were any pathogenic mutations found in the genes?"
                        value={data.foundPathogenicMutations}
                        onChange={handleFoundPathogenicMutationsChange}
                        options={radioInputOptions} row
                        id={`${id}-foundPathogenicMutations`} />
                    {data.foundPathogenicMutations && data.foundPathogenicMutations !== "unsure" && (
                        <AutocompleteInput label="Which gene(s) had pathogenic mutations?"
                            options={geneOptions} value={data.pathogenicGeneMutations}
                            onChange={handleGeneMutationAutocompleteChange}
                            multiple freeSolo id={`${id}-pathogenicGeneMutations`}
                            placeholder="Choose from the list or type here" />
                    )}
                </>
            )}
        </Stack>
    )
}

export default GeneticTestingHistory;
