import React from "react";
import Button from "../../Button";
import useForm from "../../../hooks/useForm";
import { useUserContext } from "../../../contexts/UserContext";

const LoginForm = props => {
  const [formState, changeFieldsValue] = useForm("email", "password");
  const { login } = useUserContext();

  const sendUser = event => {
    event.preventDefault();
    const { email, password } = formState;
    const formUser = { email, password };
    login(formUser);
  };

  return (
    <form className="users-form" onSubmit={sendUser}>
      <div className="wrapper">
        <label>Correo electronico</label>
        <input
          type="email"
          placeholder="Introduce tu correo electronico"
          name="email"
          onChange={changeFieldsValue}
          value={formState.email}
        />
      </div>
      <div className="wrapper">
        <label>Contraseña</label>
        <input
          type="password"
          placeholder="Introduce tu contraseña"
          name="password"
          onChange={changeFieldsValue}
          value={formState.password}
        />
      </div>
      <Button type="submit" primary>
        Iniciar Sesión
      </Button>
    </form>
  );
};

export default LoginForm;
