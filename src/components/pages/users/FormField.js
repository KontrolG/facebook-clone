import React, { useState, useCallback } from "react";
import PropTypes from "prop-types";
import { Input, ErrorMessage } from "../../form";
import { Popover, ArrowContainer } from "react-tiny-popover";

const popoverStyles = {
  backgroundColor: "darkred",
  color: "white",
  borderRadius: "2px"
};

const FormField = ({ labelText, type, name, placeholder }) => {
  const [error, setError] = useState(null);

  const setErrorMessage = useCallback(errors => {
    const ErrorMessage = errors?.[0]?.message;
    setError(ErrorMessage);
    return null;
  }, []);

  const renderArrowContainer = ({ childRect, popoverRect, position }) => (
    <ArrowContainer
      childRect={childRect}
      popoverRect={popoverRect}
      position={position}
      arrowSize={8}
      arrowColor={popoverStyles.backgroundColor}
      className={`popover-arrow-${position}`}
    >
      {error}
    </ArrowContainer>
  );

  return (
    <div className="wrapper">
      <label htmlFor={name}>{labelText}</label>
      <Popover
        isOpen={Boolean(error)}
        positions={["right", "bottom"]}
        containerStyle={popoverStyles}
        padding={16}
        containerClassName="form-error-message"
        content={renderArrowContainer}
      >
        <Input type={type} name={name} placeholder={placeholder} />
      </Popover>
      <ErrorMessage fieldName={name}>{setErrorMessage}</ErrorMessage>
    </div>
  );
};

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
