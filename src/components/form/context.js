import React, { createContext, useContext } from "react";
import PropTypes from "prop-types";
import useForm from "../../hooks/useForm";

const defaultState = { state: { errors: [] }, changeFieldValue: () => {} };
const FormContext = createContext(defaultState);

const useFormContext = () => {
  const context = useContext(FormContext);
  if (context.changeFieldValue === defaultState.changeFieldValue) {
    throw new Error(
      "useFormContext can only be used within a FormContext.Provider, check if you placed this node on the right place!"
    );
  }
  return context;
};

const FormContextProvider = ({ children, onStateChange }) => {
  const [state, changeFieldValue] = useForm();

  const providerValue = { state, changeFieldValue };

  React.useEffect(() => onStateChange(state), [state]);

  return (
    <FormContext.Provider value={providerValue}>
      {children}
    </FormContext.Provider>
  );
};

FormContextProvider.defaultProps = {
  onStateChange: () => {}
};

FormContextProvider.propTypes = {
  children: PropTypes.node.isRequired,
  onStateChange: PropTypes.func
};

export { FormContextProvider, useFormContext };
