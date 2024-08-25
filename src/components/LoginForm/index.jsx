import { ErrorMessage, Field, Form, Formik } from "formik";
import { LOGIN_FORM_SCHEMA } from "../../utils/validationSchemas";
import classNames from "classnames";
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
      {(formikProps) => {
        const loginNameClass = classNames(styles.loginInput, {
          [styles.valid]:
            !formikProps.errors.login && formikProps.touched.login,
          [styles.invalid]:
            formikProps.errors.login && formikProps.touched.login,
        });
        const passwordNameClass = classNames(styles.loginInput, {
          [styles.valid]:
            !formikProps.errors.password && formikProps.touched.password,
          [styles.invalid]:
            formikProps.errors.password && formikProps.touched.password,
        });
        return (
          <Form className={styles.loginForm}>
            <h2 className={styles.loginTitle}>LOGIN TO YOUR ACCOUNT</h2>
            <div>
              <label className={styles.loginLabel}>
                <Field
                  className={loginNameClass}
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
                  className={passwordNameClass}
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
        );
      }}
    </Formik>
  );
}

export default LoginForm;
