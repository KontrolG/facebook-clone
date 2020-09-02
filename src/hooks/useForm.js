import { useReducer } from "react";

const CHANGE_FIELD = "CHANGE_FIELD";

const changeFieldValue = (previousState, actionPayload) => {
  const { fieldName, value } = actionPayload;
  if (fieldName in previousState) {
    return {
      ...previousState,
      [fieldName]: value
    };
  }
  throw new Error("field not in parent form");
};

const formReducer = (previousState, action) => {
  switch (action.type) {
    case CHANGE_FIELD:
      return changeFieldValue(previousState, action.payload);
    default:
      return previousState;
  }
};

const toFieldObject = field => ({ [field]: "" });

const getInitialFormState = fields => {
  const fieldsObjects = fields.map(toFieldObject);
  return Object.assign({ errors: [] }, ...fieldsObjects);
};

const useForm = (...fields) => {
  const initialFormState = getInitialFormState(fields);
  const [state, dispatch] = useReducer(formReducer, initialFormState);

  const changeFieldsValue = ({ target }) => {
    const { name, value } = target;
    const payload = { fieldName: name, value };
    dispatch({ type: CHANGE_FIELD, payload });
  };

  return [state, changeFieldsValue];
};

export default useForm;
