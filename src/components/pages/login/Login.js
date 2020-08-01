import React from "react";
import { NavLink } from "react-router-dom";
import Card from "../../cards/Card";
import LoginForm from "./LoginForm";
import "./Login.css";

const Login = props => {
  return (
    <div className="centered-container">
      <header className="login-title">
        <h2>Bienvenido</h2>
      </header>
      <main className="login-main">
        <Card className="login-box">
          <header>
            <h3>Inicia sesión para continuar</h3>
          </header>
          <LoginForm />
          <footer>
            <NavLink to="/register">Registrate</NavLink>
          </footer>
        </Card>
      </main>
    </div>
  );
};

export default Login;
