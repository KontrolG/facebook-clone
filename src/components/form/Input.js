import React, { forwardRef, useEffect } from "react";
import PropTypes from "prop-types";
import { useFormContext } from "./context";

const Input = forwardRef(
  (
    { type, name, id, className, placeholder, hidden, disabled, validate },
    ref
  ) => {
    const { values, changeFieldValue, addFieldValidation } = useFormContext();

    useEffect(() => {
      if (validate) {
        addFieldValidation(validate, name);
      }
    }, []);

    const inputValue = values[name] || "";

    return (
      <input
        type={type}
        name={name}
        id={id ? id : name}
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
  id: null,
  className: "",
  placeholder: "",
  hidden: false,
  disabled: false,
  validate: null
};

Input.propTypes = {
  type: PropTypes.string,
  name: PropTypes.string.isRequired,
  id: PropTypes.string,
  className: PropTypes.string,
  placeholder: PropTypes.string,
  hidden: PropTypes.bool,
  disabled: PropTypes.bool,
  validate: PropTypes.object
};

export default Input;
