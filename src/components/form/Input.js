import React, { forwardRef, useEffect } from "react";
import PropTypes from "prop-types";
import { useFormContext } from "./context";

const Input = forwardRef(
  (
    {
      type,
      name,
      id,
      className,
      placeholder,
      hidden,
      disabled,
      validate,
      hasErrorsClass
    },
    ref
  ) => {
    const {
      values,
      changeFieldValue,
      addFieldValidation,
      fieldHasErrors
    } = useFormContext();

    useEffect(() => {
      if (validate) {
        addFieldValidation(validate, name);
      }
    }, []);

    const inputValue = values[name] || "";
    const inputClassName = `${className} ${
      fieldHasErrors(name) ? hasErrorsClass : ""
    }`;

    return (
      <input
        type={type}
        name={name}
        id={id ? id : name}
        value={inputValue}
        ref={ref}
        className={inputClassName}
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
  hasErrorsClass: "has-errors",
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
  hasErrorsClass: PropTypes.string,
  placeholder: PropTypes.string,
  hidden: PropTypes.bool,
  disabled: PropTypes.bool,
  validate: PropTypes.object
};

export default Input;
