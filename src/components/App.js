import React, { StrictMode, lazy } from "react";
import "./App.css";
import LazyLoadingWrapper from "./LazyLoadingWrapper";
import withErrorBoundary from "./withErrorBoundary";

const UserProvider = lazy(() => import("./UserProvider"));
const MainRouter = lazy(() => import("./MainRouter"));

const App = () => {
  return (
    <StrictMode>
      <LazyLoadingWrapper>
        <UserProvider>
          <MainRouter />
        </UserProvider>
      </LazyLoadingWrapper>
    </StrictMode>
  );
};

export default withErrorBoundary(App, "There is an Error");
