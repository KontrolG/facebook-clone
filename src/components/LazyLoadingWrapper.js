import React, { Suspense } from "react";

const LoadingMessage = () => (
  <div
    style={{
      height: "100vh",
      display: "flex",
      alignItems: "center",
      justifyContent: "center"
    }}
  >
    <p>Loading...</p>
  </div>
);

const LazyLoadingWrapper = ({ children }) => {
  return <Suspense fallback={<LoadingMessage />}>{children}</Suspense>;
};

export default LazyLoadingWrapper;
