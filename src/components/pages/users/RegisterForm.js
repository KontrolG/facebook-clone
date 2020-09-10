import React from "react";
import { v4 as getRandomId } from "uuid";
import useForm from "../../../hooks/useForm";
import { useUserContext } from "../../../contexts/UserContext";
import Button from "../../Button";

const RegisterForm = props => {
  const [formState, changeFieldValue] = useForm("email", "password");

  const { signup } = useUserContext();

  const sendUser = event => {
    event.preventDefault();
    const fakeNewUser = {
      email: `random${getRandomId()}@test.com`,
      password: getRandomId(),
      displayName: "Jhonanderson Doe",
      photoURL:
        "https://scontent-mia3-1.xx.fbcdn.net/v/t1.0-9/86181588_10158315845017189_3531420598666264576_o.jpg?_nc_cat=106&_nc_sid=09cbfe&_nc_ohc=OXWaMYPzk2gAX_JCtya&_nc_ht=scontent-mia3-1.xx&oh=c51631121785f7c9a5d8e284c7432675&oe=5F7DCBC2"
    };
    signup(fakeNewUser);
  };

  return (
    <form className="users-form" onSubmit={sendUser}>
      <div className="wrapper">
        <label>Nombre completo</label>
        <div className="name-inputs">
          <input type="text" placeholder="Introduce tu nombre" />
          <input type="text" placeholder="Introduce tu apellido" />
        </div>
      </div>
      <div className="wrapper">
        <label>Correo electronico</label>
        <input
          type="email"
          placeholder="Introduce tu correo electronico"
          value={formState.email}
          onChange={changeFieldValue}
        />
      </div>
      <div className="wrapper">
        <label>Contraseña</label>
        <input
          type="password"
          placeholder="Introduce tu contraseña"
          value={formState.password}
          onChange={changeFieldValue}
        />
      </div>
      <div className="wrapper">
        <label>Confirmar contraseña</label>
        <input type="password" placeholder="Confirma tu contraseña" />
      </div>
      <Button type="submit" primary>
        Registrar
      </Button>
    </form>
  );
};

export default RegisterForm;
