import React, { forwardRef } from "react";
import PropTypes from "prop-types";
import { useFormContext } from "./context";

const Input = forwardRef(
  ({ type, name, className, placeholder, hidden, disabled }, ref) => {
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
        hidden={hidden}
        disabled={disabled}
      />
    );
  }
);

Input.defaultProps = {
  type: "text",
  className: "",
  placeholder: "",
  hidden: false,
  disabled: false
};

Input.propTypes = {
  type: PropTypes.string,
  name: PropTypes.string.isRequired,
  className: PropTypes.string,
  placeholder: PropTypes.string,
  hidden: PropTypes.bool,
  disabled: PropTypes.bool
};

export default Input;
