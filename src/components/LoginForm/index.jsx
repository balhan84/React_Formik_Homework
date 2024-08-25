import { ErrorMessage, Field, Form, Formik } from "formik";
import { LOGIN_FORM_SCHEMA } from "../../utils/validationSchemas";
import styles from "./LoginForm.module.sass";
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
        <Form className={styles.loginForm}>
          <h2 className={styles.loginTitle}>LOGIN TO YOUR ACCOUNT</h2>
          <div>
            <label className={styles.loginLabel}>
              <Field
                className={styles.loginInput}
                type="text"
                name="login"
                placeholder="Your Login"
                autoFocus
              />
            </label>
            <ErrorMessage
              name="login"
              component="span"
              className={styles.loginError}
            />
          </div>
          <div>
            <label className={styles.loginLabel}>
              <Field
                className={styles.loginInput}
                type="text"
                name="password"
                placeholder="Your Password"
              />
            </label>
            <ErrorMessage
              name="password"
              component="span"
              className={styles.loginError}
            />
          </div>
          <button type="submit" className={styles.loginBtn}>
            LOGIN
          </button>
        </Form>
      )}
    </Formik>
  );
}

export default LoginForm;
