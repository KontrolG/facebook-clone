import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from "react-router-dom";
import PrivateRoute from "./PrivateRoute";

import Home from "./pages/home/Home";
import Login from "./pages/login/Login";

const MainRouter = () => {
  return (
    <Router>
      <Switch>
        <Route exac path="/login" component={Login} />
        <PrivateRoute
          onUnauthenticate={() => <Redirect to="/login" />}
          exact
          path="/"
          component={Home}
        />
      </Switch>
    </Router>
  );
};

export default MainRouter;
