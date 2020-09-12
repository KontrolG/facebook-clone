import React, { useState } from "react";
import Button from "../../Button";
import { useUserContext } from "../../../contexts/UserContext";
import { Form } from "../../form";
import FormField from "./FormField";

const LoginForm = () => {
  const [loginError, setLoginError] = useState(null);
  const { login } = useUserContext();

  const loginUser = async formUser => {
    setLoginError(null);
    try {
      await login(formUser);
    } catch (error) {
      setLoginError(error);
    }
  };

  const formValidations = {
    email: {
      isEmail: "Debes introducir un correo electrónico"
    },
    password: {
      isRequired: "Debes introducir una contraseña"
    }
  };

  return (
    <Form
      className="users-form"
      onSubmit={loginUser}
      validate={formValidations}
    >
      <FormField
        labelText="Correo electrónico"
        placeholder="Introduce tu correo electrónico"
        type="email"
        name="email"
      />
      <FormField
        labelText="Contraseña"
        placeholder="Introduce tu contraseña"
        type="password"
        name="password"
      />
      <p className="form-error-message users-error">
        {loginError ? loginError.message : null}
      </p>
      <Button type="submit" primary>
        Iniciar Sesión
      </Button>
    </Form>
  );
};

export default LoginForm;
