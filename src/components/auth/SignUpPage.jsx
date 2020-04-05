import React from "react";
import { Grid } from "@material-ui/core";
import { PasswordField, FormField } from "../FormField";

const SignUpPage = () => {
  return (
    <div>
      <h1>Sign Up</h1>

      <form>
        <Grid container spacing={4}>
          <Grid item xs={12}>
            <FormField
              name="email"
              label="Email"
              type="email"
              variant="outlined"
              labelWidth={40}
              fullWidth
            />
          </Grid>

          <Grid item xs={12}>
            <PasswordField
              name="password"
              label="Password"
              variant="outlined"
              labelWidth={70}
              fullWidth
              isEndAdornment
            />
          </Grid>

          <Grid item xs={12}>
            <PasswordField
              name="password2"
              label="Retype Password"
              variant="outlined"
              labelWidth={125}
              fullWidth
              isEndAdornment
            />
          </Grid>
        </Grid>
      </form>
    </div>
  );
};

export default SignUpPage;
