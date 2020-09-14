import React, { Component } from "react";
import PropTypes from "prop-types";

const withErrorBoundary = (WrapperComponent, fallbackElement) => {
  class withErrorBoundary extends Component {
    constructor(props) {
      super(props);
      this.state = { hasError: false };
    }

    static getDerivedStateFromError(error) {
      return { hasError: true };
    }

    componentDidCatch(error, errorInfo) {
      const enviroment = process.env.NODE_ENV || "development";
      if (enviroment === "development") {
        console.error(error, errorInfo);
      }
    }

    render() {
      return this.state.hasError ? (
        fallbackElement
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
