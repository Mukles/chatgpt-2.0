import * as yup from "yup";

const commonSchema = {
  email: yup
    .string()
    .email("Must be a valid email")
    .max(255)
    .required("Email is required"),
  password: yup
    .string()
    .required("Please Enter your password")
    .matches(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])(?=.{8,})/,
      "Must Contain 8 Characters, One Uppercase, One Lowercase, One Number and One Special Case Character"
    ),
};

export const loginSchema = yup.object().shape(commonSchema);

export const resetSchema = yup.object().shape({
  email: yup
    .string()
    .email("Must be a valid email")
    .required("Email is required"),
});

export const registerSchema = yup.object().shape({
  ...commonSchema,
  name: yup.string().required("Please Enter your Name").min(3),
});
