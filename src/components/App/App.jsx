import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import "../../styles.scss";
import PageLayout from "../PageLayout/PageLayout";
import { SignUpPage, LoginPage } from "../auth";

const App = () => {
  return (
    <PageLayout>
      <Switch>
        <Route
          path="/"
          component={props => <Redirect to="/sign-up" {...props} />}
          exact
        />

        <Route path="/login" component={LoginPage} />

        <Route path="/sign-up" component={SignUpPage} />
      </Switch>
    </PageLayout>
  );
};

export default App;
