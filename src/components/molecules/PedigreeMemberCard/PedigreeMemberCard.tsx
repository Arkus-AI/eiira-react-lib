import * as React from "react";
import { Card, CardContent, CardHeader, Typography } from "@mui/material";
import Icon from "../../atoms/Icon";
import { Box, Stack } from "@mui/system";

interface PedigreeMemberCardOtherInfo {
    name?: string;
    isCancerDiagnosed?: boolean;
    isDiseased?: boolean;
}

export interface PedigreeMemberCardProps {
    /**
     * Relationship to the member
     */
    relationship?: string;
    /**
     * Sex of the member
     */
    sex: "male" | "female";
    /**
     * Selected
     */
    selected?: boolean;
    /**
     * onCardClick handler
     */
    onCardClick?: () => void;
    /**
     * onAddClick handler
     */
    onAddClick?: () => void;
    /**
     * Other member information
     */
    otherInfo?: PedigreeMemberCardOtherInfo;
}

const PedigreeMemberCard = ({ relationship, sex, selected = false,
    onCardClick, onAddClick, otherInfo }: PedigreeMemberCardProps) => {
    const isMale = sex === "male";
    return (
        <Card sx={{ width: 152, height: 152, padding: "8px 4px" }}>
            <Typography variant="h5">
                <Icon iconType={isMale ? "male" : "female"} sx={{ width: 20, height: 20, marginRight: 0.5 }} />
                {relationship}
            </Typography>
            <Box sx={{ paddingLeft: "24px" }}>
                <Typography>
                    Some random text here
                </Typography>
            </Box>
        </Card >
    )
}

export default PedigreeMemberCard;
