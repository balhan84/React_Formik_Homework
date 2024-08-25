import * as yup from "yup";

export const LOGIN_FORM_SCHEMA = yup.object({
  login: yup.string().trim().email().required(),
  password: yup
    .string()
    .trim()
    .min(8)
    .max(20)
    .matches(/(?=.*[0-9])/, "Password must contain at least one number")
    .matches(/(?=.*[a-z])/, "Password must contain at least one lower letter")
    .matches(/(?=.*[A-Z])/, "Password must contain at least one upper letter")
    .required(),
});
