import React from "react";
import PropTypes from "prop-types";
import ErrorMessage from "../../form/ErrorMessage";

const FormErrorMessage = ({ fieldName }) => {
  return (
    <p className="form-error-message">
      <ErrorMessage fieldName={fieldName} />
    </p>
  );
};

FormErrorMessage.propTypes = {
  fieldName: PropTypes.string.isRequired
};

export default FormErrorMessage;
