import { ErrorMessage, Field, Form, Formik } from "formik";
import { LOGIN_FORM_SCHEMA } from "../../utils/validationSchemas";

function LoginForm() {
  const initialValues = { login: "", password: "" };

  const handleSubmit = (value, formikBag) => {
    console.log(value);
    formikBag.resetForm();
  };

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={handleSubmit}
      validationSchema={LOGIN_FORM_SCHEMA}
    >
      {(formikProps) => (
        <Form>
          <div>
            <label>
              <Field
                type="text"
                name="login"
                placeholder="Your Login"
                autoFocus
              />
            </label>
            <ErrorMessage name="login" component="span" />
          </div>
          <div>
            <label>
              <Field type="text" name="password" placeholder="Your Password" />
            </label>
            <ErrorMessage name="password" component="span" />
          </div>
          <button type="submit">LOGIN</button>
        </Form>
      )}
    </Formik>
  );
}

export default LoginForm;
