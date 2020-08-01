import React from "react";
import { Box } from "@material-ui/core";
import SignUpForm from "./authForms/SignUpForm";
import { Link } from "react-router-dom";
import { routesNames } from "../../constants";

const SignUpPage = () => {
  return (
    <Box maxWidth="500px" m="0 auto" textAlign="center">
      <h1>Sign Up</h1>

      <SignUpForm />

      <Link to={routesNames.login}>Go to Login Page</Link>
    </Box>
  );
};

export default SignUpPage;
