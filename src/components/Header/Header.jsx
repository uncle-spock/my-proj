import React from "react";
import { connect } from "react-redux";
import { useHistory } from "react-router-dom";
import { Button, Grid } from "@material-ui/core";

import { routesNames } from "../../constants";
import { logOut } from "../auth/actions";

const Header = ({ onLogOut }) => {
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

        <Grid item xs></Grid>

        <Grid item xs="auto">
          <Button variant="contained" color="primary" onClick={handleLogOut}>
            Log Out
          </Button>
        </Grid>
      </Grid>
    </header>
  );
};

export default connect(null, {
  onLogOut: logOut,
})(Header);
