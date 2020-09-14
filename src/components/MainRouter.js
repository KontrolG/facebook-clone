import React, { lazy, Suspense } from "react";
import {
  HashRouter as Router,
  Switch,
  Route,
  Redirect
} from "react-router-dom";
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
        <Suspense fallback="Loading Page">
          <Route exac path="/users" component={Users} />
          <PrivateRoute
            isAuthenticated={isLoggedIn}
            onUnauthenticate={() => <Redirect to="/users/login" />}
            exact
            path="/"
            component={Home}
          />
        </Suspense>
      </Switch>
    </Router>
  );
};

export default MainRouter;
