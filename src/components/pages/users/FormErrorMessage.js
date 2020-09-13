import React from "react";
import PropTypes from "prop-types";
import ErrorMessage from "../../form/ErrorMessage";

const FormErrorMessage = ({ fieldName }) => {
  return (
    <div className="form-error-message">
      <ErrorMessage fieldName={fieldName} />
    </div>
  );
};

FormErrorMessage.propTypes = {
  fieldName: PropTypes.string.isRequired
};

export default FormErrorMessage;
