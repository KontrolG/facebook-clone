import React from "react";

const ButtonPrimary = ({ children, isDisabled, formId }) => (
  <button className="btn-primary full-width" disabled={isDisabled} form={formId}>
    {children}
  </button>
);

export default ButtonPrimary;
