import React, { StrictMode } from "react";
import { UserProvider } from "./contexts/UserContext";
import "./App.css";
import MainRouter from "./components/MainRouter";

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
