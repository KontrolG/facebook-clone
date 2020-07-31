import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
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
      <Router>
        <Switch>
          <Route exac path="/" component={Home} />
        </Switch>
      </Router>
    </Provider>
  );
};

export default App;
