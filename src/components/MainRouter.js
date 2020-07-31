import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from "react-router-dom";
import PrivateRoute from "./PrivateRoute";

import Home from "./pages/home/Home";

const MainRouter = () => {
  return (
    <Router>
      <Switch>
        <PrivateRoute
          onUnauthenticate={() => <Redirect to="/login" />}
          exact
          path="/"
          component={Home}
        />
        <Route exac path="/login" component={() => "Logeate perro"} />
      </Switch>
    </Router>
  );
};

export default MainRouter;
