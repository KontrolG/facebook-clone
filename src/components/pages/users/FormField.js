import React from "react";
import PropTypes from "prop-types";
import { Input } from "../../form";
import FormErrorMessage from "./FormErrorMessage";

const FormField = ({ labelText, type, name, placeholder }) => (
  <div className="wrapper">
    <label htmlFor={name}>{labelText}</label>
    <Input type={type} name={name} placeholder={placeholder} />
    <FormErrorMessage fieldName={name} />
  </div>
);

FormField.defaultProps = {
  type: "text",
  placeholder: undefined
};

FormField.propTypes = {
  labelText: PropTypes.string.isRequired,
  type: PropTypes.string,
  name: PropTypes.string.isRequired,
  placeholder: PropTypes.string
};

export default FormField;
