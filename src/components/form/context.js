import React, { createContext, useContext, useState, useEffect } from "react";
import PropTypes from "prop-types";
import useForm from "../../hooks/useForm";
import validate from "./validate";

const defaultState = {
  values: {},
  changeFieldValue: () => {},
  validations: null,
  addFieldValidation: () => {},
  setFormValidations: () => {},
  errors: null,
  setErrors: () => {}
};

const FormContext = createContext(defaultState);

const useFormContext = () => {
  const context = useContext(FormContext);
  if (context.changeFieldValue === defaultState.changeFieldValue) {
    throw new Error(
      "useFormContext can only be used within a FormContextProvider, check if you placed this node on the right place!"
    );
  }
  return context;
};

const useFormErrors = () => {
  const { errors, fieldHasErrors, setErrors } = useFormContext();
  return { errors, fieldHasErrors, setErrors };
};

const FormContextProvider = ({ children }) => {
  const [values, changeFieldValue] = useForm();
  const [validations, setValidations] = useState(null);
  const [errors, setErrors] = useState(null);

  const addFieldValidation = (validation, fieldName) =>
    setValidations(validations => {
      return {
        ...validations,
        [fieldName]: validation
      };
    });

  const setFormValidations = formValidations =>
    setValidations(validations => {
      return {
        ...formValidations,
        ...validations
      };
    });

  const validateFields = () => {
    const errors = validate(values, validations);
    setErrors(errors);
    if (!errors) return true;
  };

  const fieldHasErrors = fieldName => {
    if (!errors) return false;
    const fieldErrors = errors[fieldName];
    return fieldErrors ? fieldErrors.length > 0 : false;
  };

  const providerValue = {
    values,
    changeFieldValue,
    addFieldValidation,
    setFormValidations,
    validateFields,
    errors,
    setErrors,
    fieldHasErrors
  };

  return (
    <FormContext.Provider value={providerValue}>
      {children}
    </FormContext.Provider>
  );
};

FormContextProvider.propTypes = {
  children: PropTypes.node.isRequired
};

const FormContextConsumer = FormContext.Consumer;

export {
  FormContextProvider,
  useFormContext,
  FormContextConsumer,
  useFormErrors
};
