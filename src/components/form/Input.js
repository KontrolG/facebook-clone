import React, { forwardRef } from "react";
import PropTypes from "prop-types";
import { useFormContext } from "./context";

const Input = forwardRef(({ type, name, className, placeholder }, ref) => {
  const { state, changeFieldValue } = useFormContext();
  const inputValue = state[name] || "";
  return (
    <input
      type={type}
      name={name}
      value={inputValue}
      ref={ref}
      className={className}
      placeholder={placeholder}
      onChange={changeFieldValue}
    />
  );
});

Input.defaultProps = {
  type: "text",
  className: "",
  placeholder: ""
};

Input.propTypes = {
  type: PropTypes.string,
  name: PropTypes.string.isRequired,
  className: PropTypes.string,
  placeholder: PropTypes.string
};

export default Input;
