import React from "react";

const ButtonPrimary = ({ children, isDisabled }) => (
  <button className="btn-primary full-width" disabled={isDisabled}>
    {children}
  </button>
);

export default ButtonPrimary;
