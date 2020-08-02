import React from "react";
import {
  BrowserRouter as Router,
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
        <Route exac path="/user" component={Users} />
        <PrivateRoute
          onUnauthenticate={() => <Redirect to="/user/login" />}
          exact
          path="/"
          component={Home}
        />
      </Switch>
    </Router>
  );
};

export default MainRouter;
