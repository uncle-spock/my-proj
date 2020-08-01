import React from "react";
import { connect } from "react-redux";
import { Grid, Button, CircularProgress } from "@material-ui/core";
import { Formik, Form } from "formik";
import { Redirect } from "react-router-dom";

import { PasswordField, FormField } from "../../FormField";
import { SignInValidFormScheme } from "../../../services/validationSchemas";
import { login } from "../thunks";
import { routesNames } from "../../../constants";

const LoginForm = ({ isAuth, isLoading, onLogin }) => {
  if (isLoading) return <CircularProgress />;

  if (isAuth) return <Redirect to={routesNames.dashboard} />;

  return (
    <Formik
      onSubmit={(values) => {
        onLogin(values);
      }}
      initialValues={{
        email: "",
        password: "",
      }}
      validationSchema={SignInValidFormScheme}
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

            <Grid item xs="auto">
              <Button type="submit" variant="contained" color="primary">
                Login
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
    isAuth: state.auth.isAuth,
    isLoading: state.auth.isLoading,
  }),
  {
    onLogin: login,
  }
)(LoginForm);
