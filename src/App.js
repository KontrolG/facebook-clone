import React from "react";
import { Provider } from "./context";
import Home from "./components/pages/home/Home";
import "./App.css";

const App = () => {
  const user = {
    name: { first: "Georgelyz", last: "Martinez" },
    photo: "img/test.jpg"
  };

  return (
    <Provider value={{ user }}>
      <Home />
    </Provider>
  );
};

export default App;
