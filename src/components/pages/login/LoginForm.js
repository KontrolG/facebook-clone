import React from "react";
import Button from "../../Button";

const LoginForm = props => {
  return (
    <form className="login-form">
      <div className="wrapper">
        <label>Correo electronico</label>
        <input type="email" placeholder="Introduce tu correo electronico" />
      </div>
      <div className="wrapper">
        <label>Contraseña</label>
        <input type="password" placeholder="Introduce tu contraseña" />
      </div>
      <Button type="submit" primary className="login-submit-button">
        Iniciar Sesión
      </Button>
    </form>
  );
};

export default LoginForm;
