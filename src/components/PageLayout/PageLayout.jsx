import React from "react";
import Header from "../Header/Header";

const PageLayout = ({ children }) => {
  return (
    <>
      <Header />

      <div>{children}</div>
    </>
  );
};

export default PageLayout;
