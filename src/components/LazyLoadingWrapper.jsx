import React, { Suspense } from "react";
import PropTypes from "prop-types";

const LoadingMessage = ({ height }) => (
  <div
    style={{
      height,
      display: "flex",
      alignItems: "center",
      justifyContent: "center"
    }}
  >
    <p>Cargando...</p>
  </div>
);

const LazyLoadingWrapper = ({ children, height }) => {
  return (
    <Suspense fallback={<LoadingMessage height={height} />}>
      {children}
    </Suspense>
  );
};

LazyLoadingWrapper.defaultProps = {
  height: "100vh"
};

LazyLoadingWrapper.propTypes = {
  children: PropTypes.node.isRequired,
  height: PropTypes.string
};

export default LazyLoadingWrapper;
