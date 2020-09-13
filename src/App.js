import React, { StrictMode } from "react";
import { UserProvider } from "./contexts/UserContext";
import MainRouter from "./components/MainRouter";
import "./App.css";

const App = () => {
  return (
    <StrictMode>
      <UserProvider>
        <MainRouter />
      </UserProvider>
    </StrictMode>
  );
};

export default App;
