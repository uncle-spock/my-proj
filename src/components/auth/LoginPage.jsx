import React from "react";
import { Box } from "@material-ui/core";
import LoginForm from "./authForms/LoginForm";
import { Link } from "react-router-dom";
import { routesNames } from "../../constants";

const LoginPage = () => {
  return (
    <Box maxWidth="500px" m="0 auto" textAlign="center">
      <h1>Login</h1>

      <LoginForm />

      <Link to={routesNames.signUp}>Go to Sign Up Page</Link>
    </Box>
  );
};

export default LoginPage;
