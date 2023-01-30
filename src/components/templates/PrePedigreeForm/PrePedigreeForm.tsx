import * as React from "react";
import { Paper, Typography } from "@mui/material";
import { Stack } from "@mui/system";
import { LoadingButton } from "@mui/lab"

import Icon from "../../atoms/Icon";
import NumberOfRelativesInput from "../../molecules/NumberOfRelativesInput";
import { INumberOfRelatives } from "../../molecules/NumberOfRelativesInput/NumberOfRelativesInput";
import RadioInput from "../../molecules/RadioInput";
import { useTranslation } from "react-i18next";

export interface IPrePedigreeFormProps {
   /** targets sex */
   initialSex: "male" | "female" | null;
   /** onSubmitHandler */
   onSubmit: (values: {
      sex: "male" | "female";
      numberOfRelatives: INumberOfRelatives;
   }) => void;
   isSubmitting: boolean;
}

const PrePedigreeForm: React.FC<IPrePedigreeFormProps> = ({ initialSex, onSubmit, isSubmitting }) => {
   const { t } = useTranslation();
   const [sex, setSex] = React.useState<any>(initialSex);
   const [sexError, setSexError] = React.useState<string>("");
   const [numberOfRelatives, setNumberOfRelatives] = React.useState<INumberOfRelatives>({
      brothers: 0,
      sisters: 0,
      sons: 0,
      daughters: 0,
      maternalUncles: 0,
      maternalAunts: 0,
      paternalUncles: 0,
      paternalAunts: 0,
   });

   const onSubmitHandler = () => {
      if (sex === null)
         setSexError(t('general.input.sexInput.errorMsg.required'));
      else {
         onSubmit({
            sex,
            numberOfRelatives,
         })
      }
   }

   React.useEffect(() => {
      if (sexError !== "" && sex !== null)
         setSexError("");
   }, [sex])

   return (
      <Paper sx={{ padding: "24px", maxWidth: "428px" }}>
         <Stack spacing={3}>
            <Stack direction="row" spacing={1.5} alignItems="center">
               <Icon iconType="users" color="primary" sx={{ fontSize: "32px", lineHeight: "37px" }} />
               <Typography variant="h4"> {t("pedigree.title")} </Typography>
            </Stack>
            <RadioInput label={t("general.input.sexInput.label")} required row
               options={[
                  { label: t("general.input.sexInput.options.female"), value: "female" },
                  { label: t("general.input.sexInput.options.male"), value: "male" }]}
               value={sex}
               onChange={setSex}
               errorText={sexError}
            />
            <Stack spacing={1}>
               <Typography>{t("pedigree.memberCount.biologicalRelatives.title")}</Typography>
               <Typography variant="caption">{t("pedigree.memberCount.biologicalRelatives.description")}</Typography>
            </Stack>
            <NumberOfRelativesInput numberOfRelatives={numberOfRelatives} onChange={setNumberOfRelatives} />
            <Stack alignItems="center">
               <LoadingButton variant="contained" onClick={onSubmitHandler} loading={isSubmitting}>{t("pedigree.memberCount.buttons.createFamilyTree")}</LoadingButton>
            </Stack>
         </Stack>
      </Paper >
   )
}

export default PrePedigreeForm;