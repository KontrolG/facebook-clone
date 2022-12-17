import React, { lazy } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from "react-router-dom";
import LazyLoadingWrapper from "./LazyLoadingWrapper";
import PrivateRoute from "./PrivateRoute";
import { useUserContext } from "../contexts/UserContext";

const Home = lazy(() => import("./pages/home/Home"));
const Users = lazy(() => import("./pages/users/Users"));

const MainRouter = () => {
  const { user } = useUserContext();

  const isLoggedIn = user !== null;

  return (
    <Router>
      <Switch>
        <LazyLoadingWrapper>
          <Route exac path="/users" component={Users} />
          <PrivateRoute
            isAuthenticated={isLoggedIn}
            onUnauthenticate={() => <Redirect to="/users/login" />}
            exact
            path="/"
            component={Home}
          />
        </LazyLoadingWrapper>
      </Switch>
    </Router>
  );
};

export default MainRouter;
