import React, { forwardRef } from "react";
import PropTypes from "prop-types";
import { FormContextProvider } from "./context";

const Form = forwardRef(
  ({ children, className, onSubmit, onStateChange }, ref) => {
    return (
      <FormContextProvider onStateChange={onStateChange}>
        <form ref={ref} onSubmit={onSubmit} className={className}>
          {children}
        </form>
      </FormContextProvider>
    );
  }
);

Form.defaultProps = {
  className: "",
  onSubmit: () => {},
  onStateChange: () => {}
};

Form.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
  onSubmit: PropTypes.func,
  onStateChange: PropTypes.func
};

export default Form;
