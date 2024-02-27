import * as yup from "yup";

const validationSchema = yup.object({
  name: yup
    .string()
    .required("Name is required")
    .min(3, "Name should be at least 3 characters"),
  age: yup
    .number()
    .required("Age is required")
    .positive("Age should be a positive number"),
  sex: yup
    .string()
    .required("Sex is required")
    .oneOf(["Male", "Female"], "Invalid sex"),
  mobile: yup
    .string()
    .required("Mobile is required")
    .matches(/^[6-9]\d{9}$/, "Invalid Indian mobile number"),
  govtIdType: yup.string().oneOf(["Aadhar", "PAN"], "Invalid ID Type"),
  govtId: yup.string().transform((originalValue, originalObject) => {
    if (originalObject.govtIdType === "Aadhar") {
      return yup
        .string()
        .matches(/^[2-9]\d{11}$/, "Invalid Aadhar number")
        .isValidSync(originalValue)
        ? originalValue
        : undefined;
    }
    return originalValue;
  }),
});

export default validationSchema;
