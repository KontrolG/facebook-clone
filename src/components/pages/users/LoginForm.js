import React from "react";
import Button from "../../Button";
import { useUserContext } from "../../../contexts/UserContext";
import { Form } from "../../form";
import FormField from "./FormField";

const LoginForm = () => {
  const { login } = useUserContext();

  const sendUser = formUser => {
    try {
      login(formUser);
    } catch (error) {
      console.log(error);
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
    <Form className="users-form" onSubmit={sendUser} validate={formValidations}>
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
      <Button type="submit" primary>
        Iniciar Sesión
      </Button>
    </Form>
  );
};

export default LoginForm;
