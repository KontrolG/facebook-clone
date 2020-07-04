import React, {StrictMode} from "react";
import ReactDOM from "react-dom";
import App from "./App";

const appContainer = document.querySelector("#app");

ReactDOM.render(
  <StrictMode>
    <App />
  </StrictMode>,
  appContainer
);
