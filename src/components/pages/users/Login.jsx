import React from "react";
import { NavLink } from "react-router-dom";
import LoginForm from "./LoginForm";

const Login = props => {
  return (
    <>
      <header>
        <h3>Inicia sesión para continuar</h3>
      </header>
      <LoginForm />
      <footer>
        <NavLink to="/users/register">¿No tienes cuenta? Registrate</NavLink>
      </footer>
    </>
  );
};

export default Login;
