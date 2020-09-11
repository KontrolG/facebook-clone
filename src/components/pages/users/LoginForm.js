import React, { useState } from "react";
import Button from "../../Button";
import { useUserContext } from "../../../contexts/UserContext";
import { Form, Input } from "../../form";

const LoginForm = props => {
  const [formState, setFormState] = useState();
  const { login } = useUserContext();

  const sendUser = event => {
    event.preventDefault();
    const { email, password } = formState;
    const formUser = { email, password };
    login(formUser);
  };

  return (
    <Form
      className="users-form"
      onStateChange={setFormState}
      onSubmit={sendUser}
    >
      <div className="wrapper">
        <label htmlFor="email">Correo electronico</label>
        <Input
          type="email"
          name="email"
          placeholder="Introduce tu correo electronico"
        />
      </div>
      <div className="wrapper">
        <label htmlFor="password">Contraseña</label>
        <Input
          type="password"
          placeholder="Introduce tu contraseña"
          name="password"
        />
      </div>
      <Button type="submit" primary>
        Iniciar Sesión
      </Button>
    </Form>
  );
};

export default LoginForm;
