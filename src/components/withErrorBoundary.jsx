import React, { Component } from "react";
import PropTypes from "prop-types";

const enviroment = process.env.NODE_ENV || "development";
const isEnvProduction = enviroment === "production";

const withErrorBoundary = (WrapperComponent, fallbackElement) => {
  class withErrorBoundary extends Component {
    constructor(props) {
      super(props);
      this.state = { error: null, hasError: false };
    }

    static getDerivedStateFromError(error) {
      return { error, hasError: true };
    }

    render() {
      return this.state.hasError ? (
        <>
          {fallbackElement} {!isEnvProduction ? this.state.error.message : null}
        </>
      ) : (
        <WrapperComponent {...this.props} />
      );
    }
  }

  const wrapperComponentName =
    WrapperComponent.displayName || WrapperComponent.name || "Unnamed";
  withErrorBoundary.displayName = `withErrorBoundary(${wrapperComponentName})`;

  return withErrorBoundary;
};

withErrorBoundary.propTypes = {
  WrapperComponent: PropTypes.elementType.isRequired,
  fallBackElement: PropTypes.element.isRequired
};

export default withErrorBoundary;
