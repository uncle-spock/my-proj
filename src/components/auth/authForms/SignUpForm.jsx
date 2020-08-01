import React from "react";
import { connect } from "react-redux";
import { Grid, Button, CircularProgress } from "@material-ui/core";
import { Formik, Form } from "formik";
import { cloneDeep } from "lodash";

import { PasswordField, FormField } from "../../FormField";
import { SignUpValidFormScheme } from "../../../services/validationSchemas";
import { signUp } from "../thunks";

const SignUpForm = ({ isLoading, onSignUp }) => {
  const submitForm = (values) => {
    const formData = cloneDeep(values);

    delete formData.retypePassword;

    onSignUp(formData);
  };

  if (isLoading) return <CircularProgress />;

  return (
    <Formik
      onSubmit={(values) => submitForm(values)}
      initialValues={{
        email: "",
        password: "",
        retypePassword: "",
      }}
      validationSchema={SignUpValidFormScheme}
    >
      {(props) => (
        <Form>
          <Grid container spacing={4} justify="flex-end">
            <Grid item xs={12}>
              <FormField
                name="email"
                label="Email"
                type="email"
                variant="outlined"
                fullWidth
              />
            </Grid>

            <Grid item xs={12}>
              <PasswordField
                name="password"
                label="Password"
                variant="outlined"
                fullWidth
                isEndAdornment
              />
            </Grid>

            <Grid item xs={12}>
              <PasswordField
                name="retypePassword"
                label="Retype Password"
                variant="outlined"
                fullWidth
                isEndAdornment
              />
            </Grid>

            <Grid item xs="auto">
              <Button type="submit" variant="contained" color="primary">
                Sign Up
              </Button>
            </Grid>
          </Grid>
        </Form>
      )}
    </Formik>
  );
};

export default connect(
  (state) => ({
    isLoading: state.auth.isLoading,
  }),
  {
    onSignUp: signUp,
  }
)(SignUpForm);
