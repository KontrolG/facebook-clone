import React, { forwardRef, useEffect } from "react";
import PropTypes from "prop-types";
import { FormProvider, FormConsumer } from "./context";

const Form = forwardRef(
  ({ className, children, onSubmit, validate, context }, ref) => {
    const { values, setFormValidations, validateFields } = context;

    useEffect(() => {
      if (validate) {
        setFormValidations(validate);
      }
    }, []);

    const validateFieldsBeforeSubmit = event => {
      event.preventDefault();
      if (validateFields()) {
        onSubmit(values);
      }
    };

    return (
      <form
        ref={ref}
        onSubmit={validateFieldsBeforeSubmit}
        className={className}
        noValidate
      >
        {children}
      </form>
    );
  }
);

const FormWrapper = forwardRef(
  ({ children, className, onSubmit, validate }, ref) => {
    return (
      <FormProvider>
        <FormConsumer>
          {context => (
            <Form
              ref={ref}
              onSubmit={onSubmit}
              validate={validate}
              className={className}
              context={context}
              children={children}
            />
          )}
        </FormConsumer>
      </FormProvider>
    );
  }
);

FormWrapper.defaultProps = {
  className: "",
  onSubmit: () => {},
  validate: null
};

FormWrapper.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
  onSubmit: PropTypes.func,
  validate: PropTypes.object
};

export default FormWrapper;
