import React from "react";
import { Switch, Route } from "react-router-dom";
import Card from "../../cards/Card";
import Login from "./Login";
import "./Users.css";

const Users = props => {
  return (
    <div className="centered-container">
      <header className="users-title">
        <h2>Bienvenido</h2>
      </header>
      <main className="users-main">
        <Card className="users-box">
          <Switch>
            <Route exact path="/users/login" component={Login} />
          </Switch>
        </Card>
      </main>
    </div>
  );
};

export default Users;
