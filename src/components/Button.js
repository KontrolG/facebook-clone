import React from "react";
import useClassNames from "../hooks/useClassNames";

const Button = ({ children, isDisabled, formId, primary, fullWidth }) => {
  const [getClassNames, addClassNameIf] = useClassNames([]);
  addClassNameIf(primary, "btn-primary");
  addClassNameIf(fullWidth, "full-width");

  return (
    <button className={getClassNames()} disabled={isDisabled} form={formId}>
      {children}
    </button>
  );
};

Button.defaultProps = {
  isDisabled: false
};

export default Button;
