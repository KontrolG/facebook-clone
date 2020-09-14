import React, { StrictMode, lazy } from "react";
import "./App.css";
import LazyLoadingWrapper from "./LazyLoadingWrapper";

const UserProvider = lazy(() => import("../contexts/UserProvider"));
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

export default App;
