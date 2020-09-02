import React from "react";
import Button from "../../Button";

const changeFieldValue = (previousState, actionPayload) => {
  const { fieldName, value } = actionPayload;

  if (fieldName in previousState) {
    return {
      ...previousState,
      [fieldName]: value
    };
  }
  throw new Error("Field name not in parent form");
};

const useForm = (...fields) => {
  // for each field on fields, create a action creator.
  const fieldsObjects = fields.map(field => ({ [field]: "" }));
  const initialState = Object.assign({ errors: [] }, ...fieldsObjects);

  const [state, dispatch] = React.useReducer((previousState, action) => {
    switch (action.type) {
      case "change_field":
        return changeFieldValue(previousState, action.payload);
      default:
        return previousState;
    }
  }, initialState);

  const changeFieldsValue = ({ target }) => {
    const { name, value } = target;
    const payload = { fieldName: name, value };
    dispatch({ type: "change_field", payload });
    console.log(state);
  };

  return [state, changeFieldsValue];
};

const LoginForm = props => {
  const [formState, changeFieldsValue] = useForm("email", "password");

  const sendUser = event => {
    event.preventDefault();
  };

  return (
    <form
      className="users-form"
      onSubmit={sendUser}
      onChange={changeFieldsValue}
    >
      <div className="wrapper">
        <label>Correo electronico</label>
        <input
          type="email"
          placeholder="Introduce tu correo electronico"
          name="email"
        />
      </div>
      <div className="wrapper">
        <label>Contraseña</label>
        <input
          type="password"
          placeholder="Introduce tu contraseña"
          name="password"
        />
      </div>
      <Button type="submit" primary>
        Iniciar Sesión
      </Button>
    </form>
  );
};

export default LoginForm;
