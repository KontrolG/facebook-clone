import React from "react";
import Button from "../../Button";

const RegisterForm = props => {
  const sendUser = event => {
    event.preventDefault();
  };

  return (
    <form className="login-form" onSubmit={sendUser}>
      <div className="wrapper">
        <label>Nombre completo</label>
        <div className="name-inputs">
          <input type="text" placeholder="Introduce tu nombre" />
          <input type="text" placeholder="Introduce tu apellido" />
        </div>
      </div>
      <div className="wrapper">
        <label>Correo electronico</label>
        <input type="email" placeholder="Introduce tu correo electronico" />
      </div>
      <div className="wrapper">
        <label>Contraseña</label>
        <input type="password" placeholder="Introduce tu contraseña" />
      </div>
      <div className="wrapper">
        <label>Confirmar contraseña</label>
        <input type="password" placeholder="Confirma tu contraseña" />
      </div>
      <Button type="submit" primary className="login-submit-button">
        Iniciar Sesión
      </Button>
    </form>
  );
};

export default RegisterForm;
