// components/Step1Form/Step1Form.tsx
import React from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import {
  TextField,
  Select,
  MenuItem,
  Button,
  Container,
  Grid,
  InputLabel,
  FormControl,
} from "@mui/material";
import validationSchema from "./validationSchema";
import * as yup from "yup";

interface Step1FormData {
  name: string;
  age: number;
  sex: string;
  mobile: string;
  govtIdType: string;
  govtId?: string;
}

interface Step1FormProps {
  onSubmit: SubmitHandler<Step1FormData>;
}

const Step1Form: React.FC<Step1FormProps> = ({ onSubmit }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
    getValues,
  } = useForm<Step1FormData>({
    resolver: async (values, context, options) => {
      try {
        await validationSchema.validate(values, { abortEarly: false });
        return { values, errors: {} };
      } catch (validationErrors) {
        const castedErrors = validationErrors as yup.ValidationError;
        return {
          values: {},
          errors: castedErrors.inner.reduce(
            (
              acc: Record<string, string>,
              { path, message }: { path?: string; message?: string }
            ) => ({
              ...acc,
              [path!]: message!,
            }),
            {}
          ),
        };
      }
    },
  });

  return (
    <Container component="main" maxWidth="xs">
      <form onSubmit={handleSubmit(onSubmit)}>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <TextField
              {...register("name")}
              label="Name"
              name="name"
              fullWidth
              required
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              {...register("age")}
              label="Age"
              name="age"
              type="number"
              fullWidth
              required
            />
          </Grid>
          <Grid item xs={12}>
            <FormControl fullWidth required>
              <InputLabel>Sex</InputLabel>
              <Select {...register("sex")} label={"sex"} name="sex">
                <MenuItem value="Male">Male</MenuItem>
                <MenuItem value="Female">Female</MenuItem>
              </Select>
            </FormControl>
          </Grid>
          <Grid item xs={12}>
            <TextField
              {...register("mobile")}
              label="Mobile"
              name="mobile"
              fullWidth
              required
            />
          </Grid>
          <Grid item xs={12}>
            <FormControl fullWidth required>
              <InputLabel>Govt Issued ID Type</InputLabel>
              <Select
                {...register("govtIdType")}
                name="govtIdType"
                label={"Govt Issued ID Type"}
              >
                <MenuItem value="Aadhar">Aadhar</MenuItem>
                <MenuItem value="PAN">PAN</MenuItem>
              </Select>
            </FormControl>
          </Grid>
          {getValues("govtIdType") === "Aadhar" && (
            <Grid item xs={12}>
              <TextField
                {...register("govtId")}
                label="Govt Issued ID (Aadhar)"
                name="govtId"
                fullWidth
                required
              />
            </Grid>
          )}
        </Grid>
        <Button type="submit" fullWidth variant="contained" color="primary">
          Next
        </Button>
      </form>
    </Container>
  );
};

export default Step1Form;
