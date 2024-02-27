// components/Step2Form/Step2Form.tsx
import React, { useEffect } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { TextField, Button, Autocomplete } from "@mui/material";
import validationSchema from "../Step1Form/validationSchema";
import { useDispatch, useSelector } from "react-redux";
import { fetchCountryOptions } from "../../actions/action";

interface Step2FormData {
  address?: string;
  state?: string;
  city?: string;
  country?: string;
  pincode?: string;
}

interface Step2FormProps {
  onSubmit: SubmitHandler<Step2FormData>;
}

const Step2Form: React.FC<Step2FormProps> = ({ onSubmit }) => {
  const { register, handleSubmit, formState } = useForm<Step2FormData>();
  const dispatch = useDispatch();
  // const countryOptions = useSelector((state) => state.countryOptions);

  useEffect(() => {
    // Fetch country options when the component mounts
    // dispatch(fetchCountryOptions());
  }, [dispatch]);

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <TextField name="address" label="Address" inputRef={register} />
      <TextField name="state" label="State" inputRef={register} />
      <TextField name="city" label="City" inputRef={register} />
      {/* <Autocomplete
        options={countryOptions || []}
        getOptionLabel={(option) => option}
        renderInput={(params) => (
          <TextField
            {...params}
            name="country"
            label="Country"
            inputRef={register}
          />
        )}
      /> */}
      <TextField name="pincode" label="Pincode" inputRef={register} />
      <Button type="submit">Submit</Button>
    </form>
  );
};

export default Step2Form;
