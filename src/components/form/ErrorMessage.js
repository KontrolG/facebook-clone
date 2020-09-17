import React from "react";
import PropTypes from "prop-types";
import { useFormContext } from "./context";

const toErrorParagraph = ({ message }, index) => <p key={index}>{message}</p>;

const ErrorMessage = ({ fieldName, showAll, children }) => {
  const { errors } = useFormContext();

  const fieldErrors = errors?.[fieldName];

  if (children && typeof children === "function") {
    return children(fieldErrors);
  }

  if (showAll) {
    return fieldErrors.map(toErrorParagraph);
  }

  const error = fieldErrors?.[0];

  if (error) {
    return error.message;
  }

  return null;
};

ErrorMessage.defaultProps = {
  showAll: false,
  children: null
};

ErrorMessage.propTypes = {
  children: PropTypes.func,
  fieldName: PropTypes.string.isRequired,
  showAll: PropTypes.bool
};

export default ErrorMessage;
