import { useReducer } from "react";

const CHANGE_FIELD = "CHANGE_FIELD";

const changeFieldValue = (previousState, actionPayload) => {
  const { fieldName, value } = actionPayload;
  return {
    ...previousState,
    [fieldName]: value
  };
};

const formReducer = (previousState, action) => {
  switch (action.type) {
    case CHANGE_FIELD:
      return changeFieldValue(previousState, action.payload);
    default:
      return previousState;
  }
};

const useForm = () => {
  const initialFormState = { errors: [] };
  const [state, dispatch] = useReducer(formReducer, initialFormState);

  const changeFieldsValue = ({ target }) => {
    const { name, value } = target;
    const payload = { fieldName: name, value };
    dispatch({ type: CHANGE_FIELD, payload });
  };

  return [state, changeFieldsValue];
};

export default useForm;
