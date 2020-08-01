import React from "react";
import { connect } from "react-redux";
import { Button, Grid } from "@material-ui/core";
import { useHistory } from "react-router-dom";

import { logOut } from "../auth/authActions";
import { routesNames } from "../../constants";

const Header = ({ onLogOut, userEmail }) => {
  const history = useHistory();

  const handleLogOut = () => {
    onLogOut();
    history.push(routesNames.login);
  };

  return (
    <header>
      <Grid container spacing={2} alignItems="center">
        <Grid item xs="auto">
          LOGO
        </Grid>

        <Grid item xs>
          {userEmail && <span>Hello, {userEmail}</span>}
        </Grid>

        <Grid item xs="auto">
          <Button variant="contained" color="primary" onClick={handleLogOut}>
            Log Out
          </Button>
        </Grid>
      </Grid>
    </header>
  );
};

export default connect(
  (state) => ({
    userEmail: state.auth.userEmail,
  }),
  {
    onLogOut: logOut,
  }
)(Header);
