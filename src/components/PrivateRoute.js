import React from "react";
import PropTypes from "prop-types";
import { Route } from "react-router-dom";

const PrivateRoute = ({
  isAuthenticated,
  onUnauthenticate,
  exact,
  path,
  component: Component
}) => (
  <Route exact={exact} path={path}>
    {isAuthenticated ? <Component /> : onUnauthenticate()}
  </Route>
);

PrivateRoute.defaultProps = {
  exact: false,
  isAuthenticated: false
};

PrivateRoute.propTypes = {
  isAuthenticated: PropTypes.bool,
  onUnauthenticate: PropTypes.func.isRequired,
  exact: PropTypes.bool,
  path: PropTypes.oneOfType([PropTypes.string, PropTypes.instanceOf(RegExp)])
    .isRequired,
  component: PropTypes.elementType.isRequired
};

export default PrivateRoute;
