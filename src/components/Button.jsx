import React from "react";
import useClassNames from "../hooks/useClassNames";

const Button = ({
  type,
  className,
  children,
  isDisabled,
  formId,
  primary,
  fullWidth,
  onClick,
  onBlur
}) => {
  const [getClassNames, addClassNameIf] = useClassNames([className]);
  addClassNameIf(primary, "btn-primary");
  addClassNameIf(fullWidth, "full-width");

  return (
    <button
      type={type}
      className={getClassNames()}
      disabled={isDisabled}
      form={formId}
      onClick={onClick}
      onBlur={onBlur}
    >
      {children}
    </button>
  );
};

Button.defaultProps = {
  isDisabled: false,
  type: "button"
};

export default Button;
