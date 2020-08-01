import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";

import "../../styles.scss";
import PageLayout from "../PageLayout/PageLayout";
import { SignUpPage, LoginPage } from "../auth";
import { routesNames } from "../../constants";

const App = () => {
  return (
    <PageLayout>
      <Switch>
        <Route
          path={routesNames.home}
          render={() => <Redirect to={routesNames.login} />}
          exact
        />

        <Route path={routesNames.login} component={LoginPage} exact />

        <Route path={routesNames.signUp} component={SignUpPage} exact />

        <Route
          path={routesNames.dashboard}
          render={() => <h1>Dashboard!</h1>}
          exact
        />
      </Switch>
    </PageLayout>
  );
};

export default App;
