import React from "react";

const Button = ({ children, isDisabled, formId, primary, fullWidth }) => {
  const classNames = [];
  if (primary) classNames.push("btn-primary");
  if (fullWidth) classNames.push("full-width");
  
  return (
    <button
      className={classNames.join(" ")}
      disabled={isDisabled}
      form={formId}
    >
      {children}
    </button>
  );
};

export default Button;
