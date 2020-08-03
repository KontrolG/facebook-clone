import React from "react";
import {
  HashRouter as Router,
  Switch,
  Route,
  Redirect
} from "react-router-dom";
import PrivateRoute from "./PrivateRoute";

import Home from "./pages/home/Home";
import Users from "./pages/users/Users";

const MainRouter = () => {
  return (
    <Router>
      <Switch>
        <Route exac path="/users" component={Users} />
        <PrivateRoute
          onUnauthenticate={() => <Redirect to="/users/login" />}
          exact
          path="/"
          component={Home}
        />
      </Switch>
    </Router>
  );
};

export default MainRouter;
