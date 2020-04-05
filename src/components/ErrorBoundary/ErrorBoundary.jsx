import React, { Component } from "react";
import ErrorPage from "../ErrorPage/ErrorPage";

class ErrorBoundary extends Component {
  state = {
    isError: false
  };

  componentDidCatch() {
    this.setState({ isError: true });
  }

  render() {
    return (
      <>{!this.state.isError ? <>{this.props.children}</> : <ErrorPage />}</>
    );
  }
}

export default ErrorBoundary;
