import React from "react";
import { Provider } from "react-redux";
import { BrowserRouter as Router } from "react-router-dom";
import { ThemeProvider, CssBaseline } from "@material-ui/core";

import { store } from "../../store";
import theme from "../../theme";
import ErrorBoundary from "../ErrorBoundary/ErrorBoundary";
import App from "../App/App";

const Root = () => {
  return (
    <Provider store={store}>
      <ErrorBoundary>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <Router>
            <App />
          </Router>
        </ThemeProvider>
      </ErrorBoundary>
    </Provider>
  );
};

export default Root;
