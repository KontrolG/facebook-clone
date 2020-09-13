import React from "react";
import PropTypes from "prop-types";
import { useFormContext } from "./context";

const toErrorParagraph = ({ message }, index) => <p key={index}>{message}</p>;

const ErrorMessage = ({ fieldName, showAll, children }) => {
  const { errors } = useFormContext();

  if (!errors) return null;

  const fieldErrors = errors[fieldName];

  if (showAll) {
    return children ? children(fieldErrors) : fieldErrors.map(toErrorParagraph);
  }

  const [error] = fieldErrors;

  return error ? error.message : null;
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
