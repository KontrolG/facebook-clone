import React, { StrictMode, lazy, Suspense } from "react";
import "./App.css";

const UserProvider = lazy(() => import("./contexts/UserProvider"));
const MainRouter = lazy(() => import("./components/MainRouter"));

const App = () => {
  return (
    <StrictMode>
      <Suspense fallback="Loading">
        <UserProvider>
          <MainRouter />
        </UserProvider>
      </Suspense>
    </StrictMode>
  );
};

export default App;
