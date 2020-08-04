import React from "react";
import { Switch, Route } from "react-router-dom";
import Card from "../../cards/Card";
import Login from "./Login";
import Register from "./Register";
import "./Users.css";

const Users = ({ match }) => {
  const { url } = match;

  return (
    <div className="centered-container">
      <header className="users-title">
        <h2>Bienvenido</h2>
      </header>
      <main className="users-main">
        <Card className="users-box">
          <Switch>
            <Route exact path={`${url}/login`} component={Login} />
            <Route exact path={`${url}/register`} component={Register} />
          </Switch>
        </Card>
      </main>
    </div>
  );
};

export default Users;
