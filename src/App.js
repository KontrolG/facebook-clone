import React, { StrictMode, lazy } from "react";
import "./App.css";
import LazyLoadingWrapper from "./components/LazyLoadingWrapper";

const UserProvider = lazy(() => import("./contexts/UserProvider"));
const MainRouter = lazy(() => import("./components/MainRouter"));

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
