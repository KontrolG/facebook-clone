import React from "react";
import { NavLink } from "react-router-dom";
import RegisterForm from "./RegisterForm";

const Register = props => {
  return (
    <>
      <header>
        <h3>Registrate para continuar</h3>
      </header>
      <RegisterForm />
      <footer>
        <NavLink to="/users/login">
          ¿Ya tienes una cuenta? Inicia Sesión
        </NavLink>
      </footer>
    </>
  );
};

export default Register;
