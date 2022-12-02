import * as React from "react";
import { Paper, Typography } from "@mui/material";
import { Stack } from "@mui/system";
import { LoadingButton } from "@mui/lab"

import Icon from "../../atoms/Icon";
import NumberOfRelativesInput from "../../molecules/NumberOfRelativesInput";
import { INumberOfRelatives } from "../../molecules/NumberOfRelativesInput/NumberOfRelativesInput";
import RadioInput from "../../molecules/RadioInput";

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
         setSexError("Required");
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
               <Typography variant="h4"> Create your family tree </Typography>
            </Stack>
            <RadioInput label="What is your biological sex?" required row
               options={[
                  { label: "Female", value: "female" },
                  { label: "Male", value: "male" }]}
               value={sex}
               onChange={setSex}
               errorText={sexError}
            />
            <Stack spacing={1}>
               <Typography>How many of these biological relatives do you have?</Typography>
               <Typography variant="caption">Fill in as much of the following information as you can. This data will be used to help us construct a family tree for you.</Typography>
            </Stack>
            <NumberOfRelativesInput numberOfRelatives={numberOfRelatives} onChange={setNumberOfRelatives} />
            <Stack alignItems="center">
               <LoadingButton variant="contained" onClick={onSubmitHandler} loading={isSubmitting}>Create family tree</LoadingButton>
            </Stack>
         </Stack>
      </Paper >
   )
}

export default PrePedigreeForm;